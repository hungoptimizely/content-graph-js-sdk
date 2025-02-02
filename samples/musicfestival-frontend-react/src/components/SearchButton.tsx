import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArtistAutocompleteQuery, useArtistAutocompleteQuery } from "../generated";
import { generateGQLSearchQueryVars } from "../helpers/queryCacheHelper";
import { isEditOrPreviewMode } from "../helpers/urlHelper";

type CustomString = string | number | readonly string[] | undefined

function SearchButton({filterValue}: any): JSX.Element {
    const singleKeyUrl = process.env.REACT_APP_CONTENT_GRAPH_GATEWAY_URL as string
    const ARTIST = "Artist"
    const [searchParams] = useSearchParams()
    const [token, setToken] = useState("")
    const [isShown, setIsShown] = useState(false)
    const [searchValue, setSearchValue] = useState<CustomString>(searchParams.get("q")?.toString() ?? "")
    const [orderBy] = useState("ASC")
    let autocompleteData : ArtistAutocompleteQuery | undefined = undefined
    
    let modeEdit = isEditOrPreviewMode()
    let variables = generateGQLSearchQueryVars(token, window.location.pathname, searchValue as string | null, orderBy);
    const { data : artistAutocompleteData } = useArtistAutocompleteQuery({ endpoint: singleKeyUrl }, variables, { staleTime: 2000, enabled: !modeEdit || !!token })
    autocompleteData = artistAutocompleteData
    
    function search(event: any, action: string){
        if ((action == "keypress" && event.charCode === 13) || action == "buttonclick") {
            window.location.href = `${window.location.origin}/search?q=${searchValue}&f=${filterValue ?? ARTIST}`
        }
    }

    function onValueChange(event: any){
        setSearchValue(event.target.value);
        event.target.value !== undefined ? setIsShown(true) : setIsShown(false);
    }

    function onAutoClick(event: any){
        setSearchValue(event.target.textContent);
        window.location.href = `${window.location.origin}/search?q=${event.target.textContent}&f=${filterValue ?? ARTIST}`
    }

    return (
        <div>
            <div className="nav-table-cell autocomplete">
                <input className="search-input" 
                    type="text" 
                    id="search-input" 
                    placeholder="Search" 
                    onKeyPress={(event) => {search(event, 'keypress')}} 
                    value={searchValue} 
                    onChange={onValueChange}
                    onFocus={() => setIsShown(true)}
                    onBlur={() =>
                        setTimeout(() => {
                            setIsShown(false);
                        }, 150)
                    } />
                    <a className="search-icon" onClick={(event) => {search(event, 'buttonclick')}}>
                        <i className="fa fa-search"></i>
                    </a>
                <div className="autocomplete-block" style={isShown ? {display: "inherit"}: {display: "none"}}>
                    {
                        autocompleteData?.ArtistDetailsPage?.autocomplete?.ArtistName?.map((name, idx) => {
                            return(
                                <div key={idx} onClick={(event) => onAutoClick(event)}>{name}</div>
                            )
                        })                    
                    }
                    {
                        autocompleteData?.ArtistDetailsPage?.autocomplete?.StageName?.map((name, idx) => {
                            return(
                                <div key={idx} onClick={(event) => onAutoClick(event)}>{name}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchButton;