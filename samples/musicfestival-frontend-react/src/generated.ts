import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Bool: any;
  Date: any;
};

export type ArtistContainerPage = IContent & {
  __typename?: 'ArtistContainerPage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type ArtistContainerPageAutocomplete = {
  __typename?: 'ArtistContainerPageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ArtistContainerPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistContainerPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistContainerPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistContainerPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistContainerPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistContainerPageAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistContainerPageAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ArtistContainerPageFacet = {
  __typename?: 'ArtistContainerPageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ArtistContainerPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistContainerPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistContainerPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistContainerPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistContainerPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistContainerPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistContainerPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistContainerPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistContainerPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistContainerPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistContainerPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistContainerPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistContainerPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistContainerPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArtistContainerPageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ArtistContainerPageOutput = {
  __typename?: 'ArtistContainerPageOutput';
  autocomplete?: Maybe<ArtistContainerPageAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<ArtistContainerPageFacet>;
  items?: Maybe<Array<Maybe<ArtistContainerPage>>>;
  total?: Maybe<Scalars['Int']>;
};


export type ArtistContainerPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type ArtistContainerPageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ArtistContainerPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArtistContainerPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArtistContainerPageWhereInput>>>;
};

export type ArtistDetailsPage = IContent & {
  __typename?: 'ArtistDetailsPage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Description to appear on the artist detail page. */
  ArtistDescription?: Maybe<Scalars['String']>;
  ArtistGenre?: Maybe<Scalars['String']>;
  ArtistIsHeadliner?: Maybe<Scalars['Bool']>;
  ArtistName?: Maybe<Scalars['String']>;
  ArtistPhoto?: Maybe<Scalars['String']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  PerformanceEndTime?: Maybe<Scalars['Date']>;
  PerformanceStartTime?: Maybe<Scalars['Date']>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StageName?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type ArtistDetailsPageAutocomplete = {
  __typename?: 'ArtistDetailsPageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  ArtistDescription?: Maybe<Array<Maybe<Scalars['String']>>>;
  ArtistGenre?: Maybe<Array<Maybe<Scalars['String']>>>;
  ArtistName?: Maybe<Array<Maybe<Scalars['String']>>>;
  ArtistPhoto?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  StageName?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ArtistDetailsPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistDetailsPageAutocompleteArtistDescriptionArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistDetailsPageAutocompleteArtistGenreArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistDetailsPageAutocompleteArtistNameArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistDetailsPageAutocompleteArtistPhotoArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistDetailsPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistDetailsPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistDetailsPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistDetailsPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistDetailsPageAutocompleteStageNameArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistDetailsPageAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ArtistDetailsPageAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ArtistDetailsPageFacet = {
  __typename?: 'ArtistDetailsPageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  ArtistDescription?: Maybe<Array<Maybe<StringFacet>>>;
  ArtistGenre?: Maybe<Array<Maybe<StringFacet>>>;
  ArtistIsHeadliner?: Maybe<Array<Maybe<StringFacet>>>;
  ArtistName?: Maybe<Array<Maybe<StringFacet>>>;
  ArtistPhoto?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PerformanceEndTime?: Maybe<Array<Maybe<DateFacet>>>;
  PerformanceStartTime?: Maybe<Array<Maybe<DateFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StageName?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ArtistDetailsPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetArtistDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetArtistGenreArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetArtistIsHeadlinerArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetArtistNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetArtistPhotoArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistDetailsPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistDetailsPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetPerformanceEndTimeArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistDetailsPageFacetPerformanceStartTimeArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistDetailsPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistDetailsPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetStageNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistDetailsPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArtistDetailsPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ArtistDetailsPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArtistDetailsPageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  ArtistDescription?: InputMaybe<OrderBy>;
  ArtistGenre?: InputMaybe<OrderBy>;
  ArtistIsHeadliner?: InputMaybe<OrderBy>;
  ArtistName?: InputMaybe<OrderBy>;
  ArtistPhoto?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PerformanceEndTime?: InputMaybe<OrderBy>;
  PerformanceStartTime?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StageName?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ArtistDetailsPageOutput = {
  __typename?: 'ArtistDetailsPageOutput';
  autocomplete?: Maybe<ArtistDetailsPageAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<ArtistDetailsPageFacet>;
  items?: Maybe<Array<Maybe<ArtistDetailsPage>>>;
  total?: Maybe<Scalars['Int']>;
};


export type ArtistDetailsPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type ArtistDetailsPageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  ArtistDescription?: InputMaybe<StringFilterInput>;
  ArtistGenre?: InputMaybe<StringFilterInput>;
  ArtistIsHeadliner?: InputMaybe<BoolFilterInput>;
  ArtistName?: InputMaybe<StringFilterInput>;
  ArtistPhoto?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PerformanceEndTime?: InputMaybe<DateFilterInput>;
  PerformanceStartTime?: InputMaybe<DateFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StageName?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ArtistDetailsPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArtistDetailsPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArtistDetailsPageWhereInput>>>;
};

export type BlobModel = {
  __typename?: 'BlobModel';
  Id?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
};

export type BlobModelAutocomplete = {
  __typename?: 'BlobModelAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type BlobModelAutocompleteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type BlobModelAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type BlobModelFacet = {
  __typename?: 'BlobModelFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type BlobModelFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlobModelFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlobModelOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
};

export type BlobModelWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
};

export type BoolFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Boolean']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Boolean']>;
};

export type BuyTicketBlock = IContent & {
  __typename?: 'BuyTicketBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Heading?: Maybe<Scalars['String']>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Message?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type BuyTicketBlockAutocomplete = {
  __typename?: 'BuyTicketBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Heading?: Maybe<Array<Maybe<Scalars['String']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  Message?: Maybe<Array<Maybe<Scalars['String']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type BuyTicketBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type BuyTicketBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type BuyTicketBlockAutocompleteHeadingArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type BuyTicketBlockAutocompleteMessageArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type BuyTicketBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type BuyTicketBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type BuyTicketBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type BuyTicketBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type BuyTicketBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type BuyTicketBlockFacet = {
  __typename?: 'BuyTicketBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Message?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type BuyTicketBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type BuyTicketBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type BuyTicketBlockFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetMessageArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type BuyTicketBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type BuyTicketBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyTicketBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type BuyTicketBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BuyTicketBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Heading?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Message?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type BuyTicketBlockOutput = {
  __typename?: 'BuyTicketBlockOutput';
  autocomplete?: Maybe<BuyTicketBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<BuyTicketBlockFacet>;
  items?: Maybe<Array<Maybe<BuyTicketBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type BuyTicketBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type BuyTicketBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Heading?: InputMaybe<StringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Message?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<BuyTicketBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BuyTicketBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BuyTicketBlockWhereInput>>>;
};

export type CaptchaElementBlock = IContent & {
  __typename?: 'CaptchaElementBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  ImageHeight?: Maybe<Scalars['Int']>;
  ImageWidth?: Maybe<Scalars['Int']>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  TextLength?: Maybe<Scalars['Int']>;
  Url?: Maybe<Scalars['String']>;
  Validators?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type CaptchaElementBlockAutocomplete = {
  __typename?: 'CaptchaElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CaptchaElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type CaptchaElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type CaptchaElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type CaptchaElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type CaptchaElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type CaptchaElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type CaptchaElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type CaptchaElementBlockFacet = {
  __typename?: 'CaptchaElementBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  ImageHeight?: Maybe<Array<Maybe<NumberFacet>>>;
  ImageWidth?: Maybe<Array<Maybe<NumberFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  TextLength?: Maybe<Array<Maybe<NumberFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Validators?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CaptchaElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CaptchaElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type CaptchaElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CaptchaElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type CaptchaElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CaptchaElementBlockFacetImageHeightArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CaptchaElementBlockFacetImageWidthArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CaptchaElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CaptchaElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CaptchaElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CaptchaElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CaptchaElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CaptchaElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type CaptchaElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CaptchaElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type CaptchaElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CaptchaElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type CaptchaElementBlockFacetTextLengthArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CaptchaElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CaptchaElementBlockFacetValidatorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CaptchaElementBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  ImageHeight?: InputMaybe<OrderBy>;
  ImageWidth?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  TextLength?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Validators?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type CaptchaElementBlockOutput = {
  __typename?: 'CaptchaElementBlockOutput';
  autocomplete?: Maybe<CaptchaElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<CaptchaElementBlockFacet>;
  items?: Maybe<Array<Maybe<CaptchaElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type CaptchaElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type CaptchaElementBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  ImageHeight?: InputMaybe<IntFilterInput>;
  ImageWidth?: InputMaybe<IntFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  TextLength?: InputMaybe<IntFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Validators?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<CaptchaElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CaptchaElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CaptchaElementBlockWhereInput>>>;
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  Description?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

export type CategoryModelAutocomplete = {
  __typename?: 'CategoryModelAutocomplete';
  Description?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CategoryModelAutocompleteDescriptionArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type CategoryModelAutocompleteNameArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type CategoryModelFacet = {
  __typename?: 'CategoryModelFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CategoryModelFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoryModelFacetIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CategoryModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CategoryModelOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type CategoryModelWhereInput = {
  Description?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type ChoiceElementBlock = IContent & {
  __typename?: 'ChoiceElementBlock';
  AllowMultiSelect?: Maybe<Scalars['Bool']>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConditionCombination?: Maybe<Scalars['Int']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Feed?: Maybe<Scalars['String']>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  SatisfiedAction?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  Validators?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type ChoiceElementBlockAutocomplete = {
  __typename?: 'ChoiceElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ChoiceElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ChoiceElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ChoiceElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ChoiceElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ChoiceElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ChoiceElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ChoiceElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ChoiceElementBlockFacet = {
  __typename?: 'ChoiceElementBlockFacet';
  AllowMultiSelect?: Maybe<Array<Maybe<StringFacet>>>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConditionCombination?: Maybe<Array<Maybe<NumberFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Feed?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  SatisfiedAction?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Validators?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ChoiceElementBlockFacetAllowMultiSelectArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ChoiceElementBlockFacetConditionCombinationArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ChoiceElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ChoiceElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetFeedArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetSatisfiedActionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ChoiceElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ChoiceElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ChoiceElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ChoiceElementBlockFacetValidatorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ChoiceElementBlockOrderByInput = {
  AllowMultiSelect?: InputMaybe<OrderBy>;
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConditionCombination?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Feed?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  SatisfiedAction?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Validators?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ChoiceElementBlockOutput = {
  __typename?: 'ChoiceElementBlockOutput';
  autocomplete?: Maybe<ChoiceElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<ChoiceElementBlockFacet>;
  items?: Maybe<Array<Maybe<ChoiceElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type ChoiceElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type ChoiceElementBlockWhereInput = {
  AllowMultiSelect?: InputMaybe<BoolFilterInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConditionCombination?: InputMaybe<IntFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Feed?: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  SatisfiedAction?: InputMaybe<SearchableStringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Validators?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ChoiceElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ChoiceElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ChoiceElementBlockWhereInput>>>;
};

export type Content = IContent & {
  __typename?: 'Content';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Changed?: Maybe<Scalars['Date']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type ContentAreaItemModel = {
  __typename?: 'ContentAreaItemModel';
  ContentLink?: Maybe<ContentModelReference>;
  DisplayOption?: Maybe<Scalars['String']>;
  InlineBlock?: Maybe<InlineBlockPropertyModel>;
  Tag?: Maybe<Scalars['String']>;
};

export type ContentAreaItemModelAutocomplete = {
  __typename?: 'ContentAreaItemModelAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  DisplayOption?: Maybe<Array<Maybe<Scalars['String']>>>;
  InlineBlock?: Maybe<InlineBlockPropertyModelAutocomplete>;
  Tag?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ContentAreaItemModelAutocompleteDisplayOptionArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentAreaItemModelAutocompleteTagArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ContentAreaItemModelFacet = {
  __typename?: 'ContentAreaItemModelFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  DisplayOption?: Maybe<Array<Maybe<StringFacet>>>;
  InlineBlock?: Maybe<InlineBlockPropertyModelFacet>;
  Tag?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentAreaItemModelFacetDisplayOptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentAreaItemModelFacetTagArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentAreaItemModelOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  DisplayOption?: InputMaybe<OrderBy>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelOrderByInput>;
  Tag?: InputMaybe<OrderBy>;
};

export type ContentAreaItemModelSearch = {
  __typename?: 'ContentAreaItemModelSearch';
  ContentLink?: Maybe<ContentModelReferenceSearch>;
  DisplayOption?: Maybe<Scalars['String']>;
  InlineBlock?: Maybe<InlineBlockPropertyModelSearch>;
  Tag?: Maybe<Scalars['String']>;
};

export type ContentAreaItemModelSearchFacet = {
  __typename?: 'ContentAreaItemModelSearchFacet';
  ContentLink?: Maybe<ContentModelReferenceSearchFacet>;
  DisplayOption?: Maybe<Array<Maybe<StringFacet>>>;
  InlineBlock?: Maybe<InlineBlockPropertyModelSearchFacet>;
  Tag?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentAreaItemModelSearchFacetDisplayOptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentAreaItemModelSearchFacetTagArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentAreaItemModelSearchOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceSearchOrderByInput>;
  DisplayOption?: InputMaybe<OrderBy>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelSearchOrderByInput>;
  Tag?: InputMaybe<OrderBy>;
};

export type ContentAreaItemModelSearchWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceSearchWhereInput>;
  DisplayOption?: InputMaybe<SearchableStringFilterInput>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelSearchWhereInput>;
  Tag?: InputMaybe<SearchableStringFilterInput>;
};

export type ContentAreaItemModelWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  DisplayOption?: InputMaybe<StringFilterInput>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelWhereInput>;
  Tag?: InputMaybe<StringFilterInput>;
};

export type ContentAutocomplete = {
  __typename?: 'ContentAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ContentBlock = IContent & {
  __typename?: 'ContentBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  Content?: Maybe<Scalars['String']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Image?: Maybe<Scalars['String']>;
  ImageAlignment?: Maybe<Scalars['String']>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Title?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type ContentBlockAutocomplete = {
  __typename?: 'ContentBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  Content?: Maybe<Array<Maybe<Scalars['String']>>>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Image?: Maybe<Array<Maybe<Scalars['String']>>>;
  ImageAlignment?: Maybe<Array<Maybe<Scalars['String']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Title?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ContentBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentBlockAutocompleteContentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentBlockAutocompleteImageArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentBlockAutocompleteImageAlignmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentBlockAutocompleteTitleArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ContentBlockFacet = {
  __typename?: 'ContentBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Image?: Maybe<Array<Maybe<StringFacet>>>;
  ImageAlignment?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ContentBlockFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ContentBlockFacetImageArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetImageAlignmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ContentBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ContentBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ContentBlockFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Image?: InputMaybe<OrderBy>;
  ImageAlignment?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ContentBlockOutput = {
  __typename?: 'ContentBlockOutput';
  autocomplete?: Maybe<ContentBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<ContentBlockFacet>;
  items?: Maybe<Array<Maybe<ContentBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type ContentBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type ContentBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Content?: InputMaybe<StringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Image?: InputMaybe<StringFilterInput>;
  ImageAlignment?: InputMaybe<StringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ContentBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentBlockWhereInput>>>;
};

export type ContentFacet = {
  __typename?: 'ContentFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ContentFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ContentFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ContentFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ContentFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ContentFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModel = {
  __typename?: 'ContentLanguageModel';
  DisplayName?: Maybe<Scalars['String']>;
  Link?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
};

export type ContentLanguageModelAutocomplete = {
  __typename?: 'ContentLanguageModelAutocomplete';
  DisplayName?: Maybe<Array<Maybe<Scalars['String']>>>;
  Link?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ContentLanguageModelAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentLanguageModelAutocompleteLinkArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentLanguageModelAutocompleteNameArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ContentLanguageModelFacet = {
  __typename?: 'ContentLanguageModelFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  Link?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentLanguageModelFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelFacetLinkArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModelOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  Link?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type ContentLanguageModelSearch = {
  __typename?: 'ContentLanguageModelSearch';
  DisplayName?: Maybe<Scalars['String']>;
  Link?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
};

export type ContentLanguageModelSearchFacet = {
  __typename?: 'ContentLanguageModelSearchFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  Link?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentLanguageModelSearchFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelSearchFacetLinkArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelSearchFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModelSearchOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  Link?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type ContentLanguageModelSearchWhereInput = {
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  Link?: InputMaybe<SearchableStringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
};

export type ContentLanguageModelWhereInput = {
  DisplayName?: InputMaybe<StringFilterInput>;
  Link?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type ContentModelReference = {
  __typename?: 'ContentModelReference';
  Expanded?: Maybe<IContent>;
  GuidValue?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['Int']>;
  Language?: Maybe<ContentLanguageModel>;
  ProviderName?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
  WorkId?: Maybe<Scalars['Int']>;
};

export type ContentModelReferenceAutocomplete = {
  __typename?: 'ContentModelReferenceAutocomplete';
  GuidValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  ProviderName?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ContentModelReferenceAutocompleteGuidValueArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentModelReferenceAutocompleteProviderNameArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ContentModelReferenceAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ContentModelReferenceFacet = {
  __typename?: 'ContentModelReferenceFacet';
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  ProviderName?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  WorkId?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContentModelReferenceFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ContentModelReferenceFacetProviderNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetWorkIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContentModelReferenceOrderByInput = {
  GuidValue?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  ProviderName?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  WorkId?: InputMaybe<OrderBy>;
};

export type ContentModelReferenceSearch = {
  __typename?: 'ContentModelReferenceSearch';
  Expanded?: Maybe<IContent>;
  GuidValue?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['Int']>;
  Language?: Maybe<ContentLanguageModelSearch>;
  ProviderName?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
  WorkId?: Maybe<Scalars['Int']>;
};

export type ContentModelReferenceSearchFacet = {
  __typename?: 'ContentModelReferenceSearchFacet';
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Language?: Maybe<ContentLanguageModelSearchFacet>;
  ProviderName?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  WorkId?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContentModelReferenceSearchFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ContentModelReferenceSearchFacetProviderNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetWorkIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContentModelReferenceSearchOrderByInput = {
  GuidValue?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelSearchOrderByInput>;
  ProviderName?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  WorkId?: InputMaybe<OrderBy>;
};

export type ContentModelReferenceSearchWhereInput = {
  GuidValue?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Language?: InputMaybe<ContentLanguageModelSearchWhereInput>;
  ProviderName?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<SearchableStringFilterInput>;
  WorkId?: InputMaybe<IntFilterInput>;
};

export type ContentModelReferenceWhereInput = {
  GuidValue?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  ProviderName?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  WorkId?: InputMaybe<IntFilterInput>;
};

export type ContentOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ContentOutput = {
  __typename?: 'ContentOutput';
  autocomplete?: Maybe<ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<ContentFacet>;
  items?: Maybe<Array<Maybe<IContent>>>;
  total?: Maybe<Scalars['Int']>;
};


export type ContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type ContentRootsModel = {
  __typename?: 'ContentRootsModel';
  ContentAssetsRoot?: Maybe<ContentModelReference>;
  GlobalAssetsRoot?: Maybe<ContentModelReference>;
  RootPage?: Maybe<ContentModelReference>;
  SiteAssetsRoot?: Maybe<ContentModelReference>;
  StartPage?: Maybe<ContentModelReference>;
  WasteBasket?: Maybe<ContentModelReference>;
};

export type ContentRootsModelAutocomplete = {
  __typename?: 'ContentRootsModelAutocomplete';
  ContentAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  GlobalAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  RootPage?: Maybe<ContentModelReferenceAutocomplete>;
  SiteAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  StartPage?: Maybe<ContentModelReferenceAutocomplete>;
  WasteBasket?: Maybe<ContentModelReferenceAutocomplete>;
};

export type ContentRootsModelFacet = {
  __typename?: 'ContentRootsModelFacet';
  ContentAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  GlobalAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  RootPage?: Maybe<ContentModelReferenceFacet>;
  SiteAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  StartPage?: Maybe<ContentModelReferenceFacet>;
  WasteBasket?: Maybe<ContentModelReferenceFacet>;
};

export type ContentRootsModelOrderByInput = {
  ContentAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  GlobalAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  RootPage?: InputMaybe<ContentModelReferenceOrderByInput>;
  SiteAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  StartPage?: InputMaybe<ContentModelReferenceOrderByInput>;
  WasteBasket?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type ContentRootsModelWhereInput = {
  ContentAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  GlobalAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  RootPage?: InputMaybe<ContentModelReferenceWhereInput>;
  SiteAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  StartPage?: InputMaybe<ContentModelReferenceWhereInput>;
  WasteBasket?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type ContentWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']>;
};

export type FileUploadElementBlock = IContent & {
  __typename?: 'FileUploadElementBlock';
  AllowMultiple?: Maybe<Scalars['Bool']>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConditionCombination?: Maybe<Scalars['Int']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FileSize?: Maybe<Scalars['Int']>;
  FileTypes?: Maybe<Scalars['String']>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  SatisfiedAction?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  Validators?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type FileUploadElementBlockAutocomplete = {
  __typename?: 'FileUploadElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type FileUploadElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FileUploadElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FileUploadElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FileUploadElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FileUploadElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FileUploadElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FileUploadElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type FileUploadElementBlockFacet = {
  __typename?: 'FileUploadElementBlockFacet';
  AllowMultiple?: Maybe<Array<Maybe<StringFacet>>>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConditionCombination?: Maybe<Array<Maybe<NumberFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  FileSize?: Maybe<Array<Maybe<NumberFacet>>>;
  FileTypes?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  SatisfiedAction?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Validators?: Maybe<Array<Maybe<StringFacet>>>;
};


export type FileUploadElementBlockFacetAllowMultipleArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FileUploadElementBlockFacetConditionCombinationArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type FileUploadElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FileUploadElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetFileSizeArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type FileUploadElementBlockFacetFileTypesArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetSatisfiedActionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FileUploadElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FileUploadElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FileUploadElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FileUploadElementBlockFacetValidatorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type FileUploadElementBlockOrderByInput = {
  AllowMultiple?: InputMaybe<OrderBy>;
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConditionCombination?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  FileSize?: InputMaybe<OrderBy>;
  FileTypes?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  SatisfiedAction?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Validators?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type FileUploadElementBlockOutput = {
  __typename?: 'FileUploadElementBlockOutput';
  autocomplete?: Maybe<FileUploadElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<FileUploadElementBlockFacet>;
  items?: Maybe<Array<Maybe<FileUploadElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type FileUploadElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type FileUploadElementBlockWhereInput = {
  AllowMultiple?: InputMaybe<BoolFilterInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConditionCombination?: InputMaybe<IntFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  FileSize?: InputMaybe<IntFilterInput>;
  FileTypes?: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  SatisfiedAction?: InputMaybe<SearchableStringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Validators?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<FileUploadElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FileUploadElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FileUploadElementBlockWhereInput>>>;
};

export type FormContainerBlock = IContent & {
  __typename?: 'FormContainerBlock';
  AllowAnonymousSubmission?: Maybe<Scalars['Bool']>;
  AllowExposingDataFeeds?: Maybe<Scalars['Bool']>;
  AllowMultipleSubmission?: Maybe<Scalars['Bool']>;
  AllowToStoreSubmissionData?: Maybe<Scalars['Bool']>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConfirmationMessage?: Maybe<Scalars['String']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ElementsArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FinalizedSubmissionRetentionPeriod?: Maybe<Scalars['String']>;
  FormModel?: Maybe<FormContainerBlockModel>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetadataAttribute?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  PartialSubmissionRetentionPeriod?: Maybe<Scalars['String']>;
  RedirectToPage?: Maybe<Scalars['String']>;
  RelativePath?: Maybe<Scalars['String']>;
  ResetConfirmationMessage?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  ShowNavigationBar?: Maybe<Scalars['Bool']>;
  ShowSummarizedData?: Maybe<Scalars['Bool']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  SubmitSuccessMessage?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type FormContainerBlockAutocomplete = {
  __typename?: 'FormContainerBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  FormModel?: Maybe<FormContainerBlockModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RedirectToPage?: Maybe<Array<Maybe<Scalars['String']>>>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type FormContainerBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormContainerBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormContainerBlockAutocompleteRedirectToPageArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormContainerBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormContainerBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormContainerBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormContainerBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormContainerBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type FormContainerBlockFacet = {
  __typename?: 'FormContainerBlockFacet';
  AllowAnonymousSubmission?: Maybe<Array<Maybe<StringFacet>>>;
  AllowExposingDataFeeds?: Maybe<Array<Maybe<StringFacet>>>;
  AllowMultipleSubmission?: Maybe<Array<Maybe<StringFacet>>>;
  AllowToStoreSubmissionData?: Maybe<Array<Maybe<StringFacet>>>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConfirmationMessage?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ElementsArea?: Maybe<ContentAreaItemModelSearchFacet>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  FinalizedSubmissionRetentionPeriod?: Maybe<Array<Maybe<StringFacet>>>;
  FormModel?: Maybe<FormContainerBlockModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetadataAttribute?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PartialSubmissionRetentionPeriod?: Maybe<Array<Maybe<StringFacet>>>;
  RedirectToPage?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  ResetConfirmationMessage?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  ShowNavigationBar?: Maybe<Array<Maybe<StringFacet>>>;
  ShowSummarizedData?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  SubmitSuccessMessage?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type FormContainerBlockFacetAllowAnonymousSubmissionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetAllowExposingDataFeedsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetAllowMultipleSubmissionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetAllowToStoreSubmissionDataArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FormContainerBlockFacetConfirmationMessageArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FormContainerBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetFinalizedSubmissionRetentionPeriodArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetMetadataAttributeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetPartialSubmissionRetentionPeriodArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetRedirectToPageArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetResetConfirmationMessageArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FormContainerBlockFacetShowNavigationBarArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetShowSummarizedDataArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FormContainerBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FormContainerBlockFacetSubmitSuccessMessageArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormContainerBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type FormContainerBlockModel = {
  __typename?: 'FormContainerBlockModel';
  Template?: Maybe<Scalars['String']>;
};

export type FormContainerBlockModelAutocomplete = {
  __typename?: 'FormContainerBlockModelAutocomplete';
  Template?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type FormContainerBlockModelAutocompleteTemplateArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type FormContainerBlockModelFacet = {
  __typename?: 'FormContainerBlockModelFacet';
  Template?: Maybe<Array<Maybe<StringFacet>>>;
};


export type FormContainerBlockModelFacetTemplateArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type FormContainerBlockModelOrderByInput = {
  Template?: InputMaybe<OrderBy>;
};

export type FormContainerBlockModelWhereInput = {
  Template?: InputMaybe<StringFilterInput>;
};

export type FormContainerBlockOrderByInput = {
  AllowAnonymousSubmission?: InputMaybe<OrderBy>;
  AllowExposingDataFeeds?: InputMaybe<OrderBy>;
  AllowMultipleSubmission?: InputMaybe<OrderBy>;
  AllowToStoreSubmissionData?: InputMaybe<OrderBy>;
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConfirmationMessage?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ElementsArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  FinalizedSubmissionRetentionPeriod?: InputMaybe<OrderBy>;
  FormModel?: InputMaybe<FormContainerBlockModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetadataAttribute?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PartialSubmissionRetentionPeriod?: InputMaybe<OrderBy>;
  RedirectToPage?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  ResetConfirmationMessage?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  ShowNavigationBar?: InputMaybe<OrderBy>;
  ShowSummarizedData?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  SubmitSuccessMessage?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type FormContainerBlockOutput = {
  __typename?: 'FormContainerBlockOutput';
  autocomplete?: Maybe<FormContainerBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<FormContainerBlockFacet>;
  items?: Maybe<Array<Maybe<FormContainerBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type FormContainerBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type FormContainerBlockWhereInput = {
  AllowAnonymousSubmission?: InputMaybe<BoolFilterInput>;
  AllowExposingDataFeeds?: InputMaybe<BoolFilterInput>;
  AllowMultipleSubmission?: InputMaybe<BoolFilterInput>;
  AllowToStoreSubmissionData?: InputMaybe<BoolFilterInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConfirmationMessage?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ElementsArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  FinalizedSubmissionRetentionPeriod?: InputMaybe<SearchableStringFilterInput>;
  FormModel?: InputMaybe<FormContainerBlockModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetadataAttribute?: InputMaybe<SearchableStringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PartialSubmissionRetentionPeriod?: InputMaybe<SearchableStringFilterInput>;
  RedirectToPage?: InputMaybe<StringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  ResetConfirmationMessage?: InputMaybe<SearchableStringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  ShowNavigationBar?: InputMaybe<BoolFilterInput>;
  ShowSummarizedData?: InputMaybe<BoolFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  SubmitSuccessMessage?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<FormContainerBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FormContainerBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FormContainerBlockWhereInput>>>;
};

export type FormStepBlock = IContent & {
  __typename?: 'FormStepBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  AttachedContentLink?: Maybe<Scalars['String']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  DependCondition?: Maybe<Scalars['Int']>;
  DependField?: Maybe<ContentModelReference>;
  DependValue?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type FormStepBlockAutocomplete = {
  __typename?: 'FormStepBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  AttachedContentLink?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  DependField?: Maybe<ContentModelReferenceAutocomplete>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type FormStepBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormStepBlockAutocompleteAttachedContentLinkArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormStepBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormStepBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormStepBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormStepBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormStepBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type FormStepBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type FormStepBlockFacet = {
  __typename?: 'FormStepBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  AttachedContentLink?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  DependCondition?: Maybe<Array<Maybe<NumberFacet>>>;
  DependField?: Maybe<ContentModelReferenceFacet>;
  DependValue?: Maybe<Array<Maybe<StringFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type FormStepBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetAttachedContentLinkArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FormStepBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FormStepBlockFacetDependConditionArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type FormStepBlockFacetDependValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FormStepBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FormStepBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FormStepBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type FormStepBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type FormStepBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  AttachedContentLink?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  DependCondition?: InputMaybe<OrderBy>;
  DependField?: InputMaybe<ContentModelReferenceOrderByInput>;
  DependValue?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type FormStepBlockOutput = {
  __typename?: 'FormStepBlockOutput';
  autocomplete?: Maybe<FormStepBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<FormStepBlockFacet>;
  items?: Maybe<Array<Maybe<FormStepBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type FormStepBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type FormStepBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  AttachedContentLink?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  DependCondition?: InputMaybe<IntFilterInput>;
  DependField?: InputMaybe<ContentModelReferenceWhereInput>;
  DependValue?: InputMaybe<SearchableStringFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<FormStepBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FormStepBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FormStepBlockWhereInput>>>;
};

export type HostDefinitionModel = {
  __typename?: 'HostDefinitionModel';
  Language?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
};

export type HostDefinitionModelAutocomplete = {
  __typename?: 'HostDefinitionModelAutocomplete';
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  Name?: Maybe<Array<Maybe<Scalars['String']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type HostDefinitionModelAutocompleteNameArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type HostDefinitionModelAutocompleteTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type HostDefinitionModelFacet = {
  __typename?: 'HostDefinitionModelFacet';
  Language?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HostDefinitionModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HostDefinitionModelFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HostDefinitionModelOrderByInput = {
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
};

export type HostDefinitionModelWhereInput = {
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
};

export type IContent = {
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Changed?: Maybe<Scalars['Date']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type ImageChoiceElementBlock = IContent & {
  __typename?: 'ImageChoiceElementBlock';
  AllowMultiSelect?: Maybe<Scalars['Bool']>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConditionCombination?: Maybe<Scalars['Int']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Items?: Maybe<Array<Maybe<LinkItemNode>>>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  SatisfiedAction?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  ShowSelectionInputControl?: Maybe<Scalars['Bool']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  Validators?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type ImageChoiceElementBlockAutocomplete = {
  __typename?: 'ImageChoiceElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Items?: Maybe<LinkItemNodeAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ImageChoiceElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageChoiceElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageChoiceElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageChoiceElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageChoiceElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageChoiceElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageChoiceElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ImageChoiceElementBlockFacet = {
  __typename?: 'ImageChoiceElementBlockFacet';
  AllowMultiSelect?: Maybe<Array<Maybe<StringFacet>>>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConditionCombination?: Maybe<Array<Maybe<NumberFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Items?: Maybe<LinkItemNodeFacet>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  SatisfiedAction?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  ShowSelectionInputControl?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Validators?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ImageChoiceElementBlockFacetAllowMultiSelectArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImageChoiceElementBlockFacetConditionCombinationArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ImageChoiceElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImageChoiceElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetSatisfiedActionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImageChoiceElementBlockFacetShowSelectionInputControlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImageChoiceElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImageChoiceElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageChoiceElementBlockFacetValidatorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ImageChoiceElementBlockOrderByInput = {
  AllowMultiSelect?: InputMaybe<OrderBy>;
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConditionCombination?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Items?: InputMaybe<LinkItemNodeOrderByInput>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  SatisfiedAction?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  ShowSelectionInputControl?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Validators?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ImageChoiceElementBlockOutput = {
  __typename?: 'ImageChoiceElementBlockOutput';
  autocomplete?: Maybe<ImageChoiceElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<ImageChoiceElementBlockFacet>;
  items?: Maybe<Array<Maybe<ImageChoiceElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type ImageChoiceElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type ImageChoiceElementBlockWhereInput = {
  AllowMultiSelect?: InputMaybe<BoolFilterInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConditionCombination?: InputMaybe<IntFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Items?: InputMaybe<LinkItemNodeWhereInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  SatisfiedAction?: InputMaybe<SearchableStringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  ShowSelectionInputControl?: InputMaybe<BoolFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Validators?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ImageChoiceElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageChoiceElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageChoiceElementBlockWhereInput>>>;
};

export type ImageFile = IContent & {
  __typename?: 'ImageFile';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  Content?: Maybe<Scalars['String']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MimeType?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Thumbnail?: Maybe<BlobModel>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type ImageFileAutocomplete = {
  __typename?: 'ImageFileAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Thumbnail?: Maybe<BlobModelAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ImageFileAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageFileAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageFileAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageFileAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageFileAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageFileAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageFileAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImageFileAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ImageFileFacet = {
  __typename?: 'ImageFileFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail?: Maybe<BlobModelFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ImageFileFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImageFileFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImageFileFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImageFileFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImageFileFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageFileFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImageFileFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ImageFileOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Thumbnail?: InputMaybe<BlobModelOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ImageFileOutput = {
  __typename?: 'ImageFileOutput';
  autocomplete?: Maybe<ImageFileAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<ImageFileFacet>;
  items?: Maybe<Array<Maybe<ImageFile>>>;
  total?: Maybe<Scalars['Int']>;
};


export type ImageFileOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type ImageFileWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Content?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Thumbnail?: InputMaybe<BlobModelWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ImageFileWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageFileWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageFileWhereInput>>>;
};

export type ImagePage = IContent & {
  __typename?: 'ImagePage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  Content?: Maybe<Scalars['String']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Copyright?: Maybe<Scalars['String']>;
  Created?: Maybe<Scalars['Date']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MimeType?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Thumbnail?: Maybe<BlobModel>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type ImagePageAutocomplete = {
  __typename?: 'ImagePageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Thumbnail?: Maybe<BlobModelAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ImagePageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImagePageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImagePageAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImagePageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImagePageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImagePageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImagePageAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ImagePageAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ImagePageFacet = {
  __typename?: 'ImagePageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Copyright?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail?: Maybe<BlobModelFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ImagePageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImagePageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImagePageFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImagePageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImagePageFacetCopyrightArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImagePageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImagePageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImagePageFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImagePageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImagePageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImagePageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImagePageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImagePageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImagePageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImagePageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImagePageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ImagePageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ImagePageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Copyright?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Thumbnail?: InputMaybe<BlobModelOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ImagePageOutput = {
  __typename?: 'ImagePageOutput';
  autocomplete?: Maybe<ImagePageAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<ImagePageFacet>;
  items?: Maybe<Array<Maybe<ImagePage>>>;
  total?: Maybe<Scalars['Int']>;
};


export type ImagePageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type ImagePageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Content?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Copyright?: InputMaybe<SearchableStringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Thumbnail?: InputMaybe<BlobModelWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ImagePageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImagePageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImagePageWhereInput>>>;
};

export type InlineBlockPropertyModel = {
  __typename?: 'InlineBlockPropertyModel';
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type InlineBlockPropertyModelAutocomplete = {
  __typename?: 'InlineBlockPropertyModelAutocomplete';
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type InlineBlockPropertyModelAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type InlineBlockPropertyModelFacet = {
  __typename?: 'InlineBlockPropertyModelFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type InlineBlockPropertyModelFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type InlineBlockPropertyModelOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
};

export type InlineBlockPropertyModelSearch = {
  __typename?: 'InlineBlockPropertyModelSearch';
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type InlineBlockPropertyModelSearchFacet = {
  __typename?: 'InlineBlockPropertyModelSearchFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type InlineBlockPropertyModelSearchFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type InlineBlockPropertyModelSearchOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
};

export type InlineBlockPropertyModelSearchWhereInput = {
  ContentType?: InputMaybe<SearchableStringFilterInput>;
};

export type InlineBlockPropertyModelWhereInput = {
  ContentType?: InputMaybe<StringFilterInput>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Int']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Int']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Int']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Int']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Int']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Int']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type LandingPage = IContent & {
  __typename?: 'LandingPage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  ArtistsLink?: Maybe<ContentModelReference>;
  BuyTicketBlock?: Maybe<LandingPageBlockData>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FooterContentArea?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
  HeroImage?: Maybe<Scalars['String']>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MainContentArea?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Subtitle?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type LandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  ArtistsLink?: Maybe<ContentModelReferenceAutocomplete>;
  BuyTicketBlock?: Maybe<LandingPageBlockDataAutocomplete>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  FooterContentArea?: Maybe<ContentAreaItemModelAutocomplete>;
  HeroImage?: Maybe<Array<Maybe<Scalars['String']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MainContentArea?: Maybe<ContentAreaItemModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Subtitle?: Maybe<Array<Maybe<Scalars['String']>>>;
  Title?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type LandingPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LandingPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LandingPageAutocompleteHeroImageArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LandingPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LandingPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LandingPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LandingPageAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LandingPageAutocompleteSubtitleArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LandingPageAutocompleteTitleArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LandingPageAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type LandingPageBlockData = {
  __typename?: 'LandingPageBlockData';
  Heading?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
};

export type LandingPageBlockDataAutocomplete = {
  __typename?: 'LandingPageBlockDataAutocomplete';
  Heading?: Maybe<Array<Maybe<Scalars['String']>>>;
  Message?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type LandingPageBlockDataAutocompleteHeadingArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LandingPageBlockDataAutocompleteMessageArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type LandingPageBlockDataFacet = {
  __typename?: 'LandingPageBlockDataFacet';
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  Message?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LandingPageBlockDataFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageBlockDataFacetMessageArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LandingPageBlockDataOrderByInput = {
  Heading?: InputMaybe<OrderBy>;
  Message?: InputMaybe<OrderBy>;
};

export type LandingPageBlockDataWhereInput = {
  Heading?: InputMaybe<StringFilterInput>;
  Message?: InputMaybe<StringFilterInput>;
};

export type LandingPageFacet = {
  __typename?: 'LandingPageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  ArtistsLink?: Maybe<ContentModelReferenceFacet>;
  BuyTicketBlock?: Maybe<LandingPageBlockDataFacet>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  FooterContentArea?: Maybe<ContentAreaItemModelFacet>;
  HeroImage?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MainContentArea?: Maybe<ContentAreaItemModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Subtitle?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LandingPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type LandingPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type LandingPageFacetHeroImageArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type LandingPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type LandingPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type LandingPageFacetSubtitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LandingPageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  ArtistsLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  BuyTicketBlock?: InputMaybe<LandingPageBlockDataOrderByInput>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  FooterContentArea?: InputMaybe<ContentAreaItemModelOrderByInput>;
  HeroImage?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MainContentArea?: InputMaybe<ContentAreaItemModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Subtitle?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type LandingPageOutput = {
  __typename?: 'LandingPageOutput';
  autocomplete?: Maybe<LandingPageAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<LandingPageFacet>;
  items?: Maybe<Array<Maybe<LandingPage>>>;
  total?: Maybe<Scalars['Int']>;
};


export type LandingPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type LandingPageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  ArtistsLink?: InputMaybe<ContentModelReferenceWhereInput>;
  BuyTicketBlock?: InputMaybe<LandingPageBlockDataWhereInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  FooterContentArea?: InputMaybe<ContentAreaItemModelWhereInput>;
  HeroImage?: InputMaybe<StringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MainContentArea?: InputMaybe<ContentAreaItemModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Subtitle?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type LinkItemNode = {
  __typename?: 'LinkItemNode';
  ContentLink?: Maybe<ContentModelReference>;
  Href?: Maybe<Scalars['String']>;
  Target?: Maybe<Scalars['String']>;
  Text?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
};

export type LinkItemNodeAutocomplete = {
  __typename?: 'LinkItemNodeAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  Href?: Maybe<Array<Maybe<Scalars['String']>>>;
  Target?: Maybe<Array<Maybe<Scalars['String']>>>;
  Text?: Maybe<Array<Maybe<Scalars['String']>>>;
  Title?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type LinkItemNodeAutocompleteHrefArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LinkItemNodeAutocompleteTargetArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LinkItemNodeAutocompleteTextArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type LinkItemNodeAutocompleteTitleArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type LinkItemNodeFacet = {
  __typename?: 'LinkItemNodeFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  Href?: Maybe<Array<Maybe<StringFacet>>>;
  Target?: Maybe<Array<Maybe<StringFacet>>>;
  Text?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LinkItemNodeFacetHrefArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkItemNodeFacetTargetArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkItemNodeFacetTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkItemNodeFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkItemNodeOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  Href?: InputMaybe<OrderBy>;
  Target?: InputMaybe<OrderBy>;
  Text?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
};

export type LinkItemNodeWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  Href?: InputMaybe<StringFilterInput>;
  Target?: InputMaybe<StringFilterInput>;
  Text?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
};

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en',
  Sv = 'sv'
}

export type NumberElementBlock = IContent & {
  __typename?: 'NumberElementBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  AutoComplete?: Maybe<Scalars['Int']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConditionCombination?: Maybe<Scalars['Int']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  PlaceHolder?: Maybe<Scalars['String']>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  SatisfiedAction?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  Validators?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type NumberElementBlockAutocomplete = {
  __typename?: 'NumberElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NumberElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type NumberElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type NumberElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type NumberElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type NumberElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type NumberElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type NumberElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type NumberElementBlockFacet = {
  __typename?: 'NumberElementBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  AutoComplete?: Maybe<Array<Maybe<NumberFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConditionCombination?: Maybe<Array<Maybe<NumberFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PlaceHolder?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  SatisfiedAction?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Validators?: Maybe<Array<Maybe<StringFacet>>>;
};


export type NumberElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetAutoCompleteArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type NumberElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type NumberElementBlockFacetConditionCombinationArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type NumberElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type NumberElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetPlaceHolderArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetSatisfiedActionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type NumberElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type NumberElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type NumberElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NumberElementBlockFacetValidatorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type NumberElementBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  AutoComplete?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConditionCombination?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PlaceHolder?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  SatisfiedAction?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Validators?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type NumberElementBlockOutput = {
  __typename?: 'NumberElementBlockOutput';
  autocomplete?: Maybe<NumberElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<NumberElementBlockFacet>;
  items?: Maybe<Array<Maybe<NumberElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type NumberElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type NumberElementBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  AutoComplete?: InputMaybe<IntFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConditionCombination?: InputMaybe<IntFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PlaceHolder?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  SatisfiedAction?: InputMaybe<SearchableStringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Validators?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<NumberElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NumberElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NumberElementBlockWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type ParagraphTextElementBlock = IContent & {
  __typename?: 'ParagraphTextElementBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConditionCombination?: Maybe<Scalars['Int']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  DisablePlaceholdersReplacement?: Maybe<Scalars['Bool']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FormSubmissionId?: Maybe<Scalars['String']>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParagraphText?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  SatisfiedAction?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type ParagraphTextElementBlockAutocomplete = {
  __typename?: 'ParagraphTextElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ParagraphTextElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ParagraphTextElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ParagraphTextElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ParagraphTextElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ParagraphTextElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ParagraphTextElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ParagraphTextElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ParagraphTextElementBlockFacet = {
  __typename?: 'ParagraphTextElementBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConditionCombination?: Maybe<Array<Maybe<NumberFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  DisablePlaceholdersReplacement?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  FormSubmissionId?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParagraphText?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  SatisfiedAction?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ParagraphTextElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ParagraphTextElementBlockFacetConditionCombinationArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ParagraphTextElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ParagraphTextElementBlockFacetDisablePlaceholdersReplacementArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetFormSubmissionIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetParagraphTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetSatisfiedActionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ParagraphTextElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ParagraphTextElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ParagraphTextElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ParagraphTextElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ParagraphTextElementBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConditionCombination?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  DisablePlaceholdersReplacement?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  FormSubmissionId?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParagraphText?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  SatisfiedAction?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ParagraphTextElementBlockOutput = {
  __typename?: 'ParagraphTextElementBlockOutput';
  autocomplete?: Maybe<ParagraphTextElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<ParagraphTextElementBlockFacet>;
  items?: Maybe<Array<Maybe<ParagraphTextElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type ParagraphTextElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type ParagraphTextElementBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConditionCombination?: InputMaybe<IntFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  DisablePlaceholdersReplacement?: InputMaybe<BoolFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  FormSubmissionId?: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParagraphText?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  SatisfiedAction?: InputMaybe<SearchableStringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ParagraphTextElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ParagraphTextElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ParagraphTextElementBlockWhereInput>>>;
};

export type PredefinedHiddenElementBlock = IContent & {
  __typename?: 'PredefinedHiddenElementBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  PredefinedValue?: Maybe<Scalars['String']>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type PredefinedHiddenElementBlockAutocomplete = {
  __typename?: 'PredefinedHiddenElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type PredefinedHiddenElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type PredefinedHiddenElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type PredefinedHiddenElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type PredefinedHiddenElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type PredefinedHiddenElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type PredefinedHiddenElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type PredefinedHiddenElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type PredefinedHiddenElementBlockFacet = {
  __typename?: 'PredefinedHiddenElementBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PredefinedValue?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type PredefinedHiddenElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PredefinedHiddenElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type PredefinedHiddenElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PredefinedHiddenElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type PredefinedHiddenElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PredefinedHiddenElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PredefinedHiddenElementBlockFacetPredefinedValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PredefinedHiddenElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PredefinedHiddenElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PredefinedHiddenElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type PredefinedHiddenElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PredefinedHiddenElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type PredefinedHiddenElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PredefinedHiddenElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type PredefinedHiddenElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PredefinedHiddenElementBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PredefinedValue?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type PredefinedHiddenElementBlockOutput = {
  __typename?: 'PredefinedHiddenElementBlockOutput';
  autocomplete?: Maybe<PredefinedHiddenElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<PredefinedHiddenElementBlockFacet>;
  items?: Maybe<Array<Maybe<PredefinedHiddenElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type PredefinedHiddenElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type PredefinedHiddenElementBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PredefinedValue?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<PredefinedHiddenElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PredefinedHiddenElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PredefinedHiddenElementBlockWhereInput>>>;
};

export type Query = {
  __typename?: 'Query';
  ArtistContainerPage?: Maybe<ArtistContainerPageOutput>;
  ArtistDetailsPage?: Maybe<ArtistDetailsPageOutput>;
  BuyTicketBlock?: Maybe<BuyTicketBlockOutput>;
  CaptchaElementBlock?: Maybe<CaptchaElementBlockOutput>;
  ChoiceElementBlock?: Maybe<ChoiceElementBlockOutput>;
  Content?: Maybe<ContentOutput>;
  ContentBlock?: Maybe<ContentBlockOutput>;
  FileUploadElementBlock?: Maybe<FileUploadElementBlockOutput>;
  FormContainerBlock?: Maybe<FormContainerBlockOutput>;
  FormStepBlock?: Maybe<FormStepBlockOutput>;
  ImageChoiceElementBlock?: Maybe<ImageChoiceElementBlockOutput>;
  ImageFile?: Maybe<ImageFileOutput>;
  ImagePage?: Maybe<ImagePageOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  NumberElementBlock?: Maybe<NumberElementBlockOutput>;
  ParagraphTextElementBlock?: Maybe<ParagraphTextElementBlockOutput>;
  PredefinedHiddenElementBlock?: Maybe<PredefinedHiddenElementBlockOutput>;
  RangeElementBlock?: Maybe<RangeElementBlockOutput>;
  ResetButtonElementBlock?: Maybe<ResetButtonElementBlockOutput>;
  SelectionElementBlock?: Maybe<SelectionElementBlockOutput>;
  SiteDefinition?: Maybe<SiteDefinitionOutput>;
  SubmitButtonElementBlock?: Maybe<SubmitButtonElementBlockOutput>;
  TextareaElementBlock?: Maybe<TextareaElementBlockOutput>;
  TextboxElementBlock?: Maybe<TextboxElementBlockOutput>;
  UrlElementBlock?: Maybe<UrlElementBlockOutput>;
  VisitorDataHiddenElementBlock?: Maybe<VisitorDataHiddenElementBlockOutput>;
};


export type QueryArtistContainerPageArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArtistContainerPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArtistContainerPageWhereInput>;
};


export type QueryArtistDetailsPageArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArtistDetailsPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArtistDetailsPageWhereInput>;
};


export type QueryBuyTicketBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BuyTicketBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BuyTicketBlockWhereInput>;
};


export type QueryCaptchaElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CaptchaElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CaptchaElementBlockWhereInput>;
};


export type QueryChoiceElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ChoiceElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChoiceElementBlockWhereInput>;
};


export type QueryContentArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryContentBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentBlockWhereInput>;
};


export type QueryFileUploadElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FileUploadElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileUploadElementBlockWhereInput>;
};


export type QueryFormContainerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FormContainerBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormContainerBlockWhereInput>;
};


export type QueryFormStepBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FormStepBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormStepBlockWhereInput>;
};


export type QueryImageChoiceElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageChoiceElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageChoiceElementBlockWhereInput>;
};


export type QueryImageFileArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageFileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageFileWhereInput>;
};


export type QueryImagePageArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImagePageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImagePageWhereInput>;
};


export type QueryLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryNumberElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NumberElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NumberElementBlockWhereInput>;
};


export type QueryParagraphTextElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphTextElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ParagraphTextElementBlockWhereInput>;
};


export type QueryPredefinedHiddenElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PredefinedHiddenElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PredefinedHiddenElementBlockWhereInput>;
};


export type QueryRangeElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<RangeElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RangeElementBlockWhereInput>;
};


export type QueryResetButtonElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ResetButtonElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResetButtonElementBlockWhereInput>;
};


export type QuerySelectionElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SelectionElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SelectionElementBlockWhereInput>;
};


export type QuerySiteDefinitionArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteDefinitionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteDefinitionWhereInput>;
};


export type QuerySubmitButtonElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SubmitButtonElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmitButtonElementBlockWhereInput>;
};


export type QueryTextareaElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextareaElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextareaElementBlockWhereInput>;
};


export type QueryTextboxElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextboxElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextboxElementBlockWhereInput>;
};


export type QueryUrlElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<UrlElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UrlElementBlockWhereInput>;
};


export type QueryVisitorDataHiddenElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VisitorDataHiddenElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VisitorDataHiddenElementBlockWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  ArtistContainerPage?: Maybe<ArtistContainerPageOutput>;
  ArtistDetailsPage?: Maybe<ArtistDetailsPageOutput>;
  BuyTicketBlock?: Maybe<BuyTicketBlockOutput>;
  CaptchaElementBlock?: Maybe<CaptchaElementBlockOutput>;
  ChoiceElementBlock?: Maybe<ChoiceElementBlockOutput>;
  Content?: Maybe<ContentOutput>;
  ContentBlock?: Maybe<ContentBlockOutput>;
  FileUploadElementBlock?: Maybe<FileUploadElementBlockOutput>;
  FormContainerBlock?: Maybe<FormContainerBlockOutput>;
  FormStepBlock?: Maybe<FormStepBlockOutput>;
  ImageChoiceElementBlock?: Maybe<ImageChoiceElementBlockOutput>;
  ImageFile?: Maybe<ImageFileOutput>;
  ImagePage?: Maybe<ImagePageOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  NumberElementBlock?: Maybe<NumberElementBlockOutput>;
  ParagraphTextElementBlock?: Maybe<ParagraphTextElementBlockOutput>;
  PredefinedHiddenElementBlock?: Maybe<PredefinedHiddenElementBlockOutput>;
  RangeElementBlock?: Maybe<RangeElementBlockOutput>;
  ResetButtonElementBlock?: Maybe<ResetButtonElementBlockOutput>;
  SelectionElementBlock?: Maybe<SelectionElementBlockOutput>;
  SiteDefinition?: Maybe<SiteDefinitionOutput>;
  SubmitButtonElementBlock?: Maybe<SubmitButtonElementBlockOutput>;
  TextareaElementBlock?: Maybe<TextareaElementBlockOutput>;
  TextboxElementBlock?: Maybe<TextboxElementBlockOutput>;
  UrlElementBlock?: Maybe<UrlElementBlockOutput>;
  VisitorDataHiddenElementBlock?: Maybe<VisitorDataHiddenElementBlockOutput>;
};


export type QueryRefArtistContainerPageArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArtistContainerPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArtistContainerPageWhereInput>;
};


export type QueryRefArtistDetailsPageArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArtistDetailsPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArtistDetailsPageWhereInput>;
};


export type QueryRefBuyTicketBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BuyTicketBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BuyTicketBlockWhereInput>;
};


export type QueryRefCaptchaElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CaptchaElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CaptchaElementBlockWhereInput>;
};


export type QueryRefChoiceElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ChoiceElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChoiceElementBlockWhereInput>;
};


export type QueryRefContentArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryRefContentBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentBlockWhereInput>;
};


export type QueryRefFileUploadElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FileUploadElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileUploadElementBlockWhereInput>;
};


export type QueryRefFormContainerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FormContainerBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormContainerBlockWhereInput>;
};


export type QueryRefFormStepBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FormStepBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormStepBlockWhereInput>;
};


export type QueryRefImageChoiceElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageChoiceElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageChoiceElementBlockWhereInput>;
};


export type QueryRefImageFileArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageFileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageFileWhereInput>;
};


export type QueryRefImagePageArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImagePageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImagePageWhereInput>;
};


export type QueryRefLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryRefNumberElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NumberElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NumberElementBlockWhereInput>;
};


export type QueryRefParagraphTextElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphTextElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ParagraphTextElementBlockWhereInput>;
};


export type QueryRefPredefinedHiddenElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PredefinedHiddenElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PredefinedHiddenElementBlockWhereInput>;
};


export type QueryRefRangeElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<RangeElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RangeElementBlockWhereInput>;
};


export type QueryRefResetButtonElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ResetButtonElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResetButtonElementBlockWhereInput>;
};


export type QueryRefSelectionElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SelectionElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SelectionElementBlockWhereInput>;
};


export type QueryRefSiteDefinitionArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteDefinitionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteDefinitionWhereInput>;
};


export type QueryRefSubmitButtonElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SubmitButtonElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmitButtonElementBlockWhereInput>;
};


export type QueryRefTextareaElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextareaElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextareaElementBlockWhereInput>;
};


export type QueryRefTextboxElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextboxElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextboxElementBlockWhereInput>;
};


export type QueryRefUrlElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<UrlElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UrlElementBlockWhereInput>;
};


export type QueryRefVisitorDataHiddenElementBlockArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VisitorDataHiddenElementBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VisitorDataHiddenElementBlockWhereInput>;
};

export type RangeElementBlock = IContent & {
  __typename?: 'RangeElementBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConditionCombination?: Maybe<Scalars['Int']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Max?: Maybe<Scalars['Int']>;
  Min?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  PredefinedValue?: Maybe<Scalars['String']>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  SatisfiedAction?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  Step?: Maybe<Scalars['Int']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type RangeElementBlockAutocomplete = {
  __typename?: 'RangeElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type RangeElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type RangeElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type RangeElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type RangeElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type RangeElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type RangeElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type RangeElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type RangeElementBlockFacet = {
  __typename?: 'RangeElementBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConditionCombination?: Maybe<Array<Maybe<NumberFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Max?: Maybe<Array<Maybe<NumberFacet>>>;
  Min?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PredefinedValue?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  SatisfiedAction?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  Step?: Maybe<Array<Maybe<NumberFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RangeElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type RangeElementBlockFacetConditionCombinationArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type RangeElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type RangeElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetMaxArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type RangeElementBlockFacetMinArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type RangeElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetPredefinedValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetSatisfiedActionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type RangeElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type RangeElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RangeElementBlockFacetStepArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type RangeElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type RangeElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RangeElementBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConditionCombination?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Max?: InputMaybe<OrderBy>;
  Min?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PredefinedValue?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  SatisfiedAction?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  Step?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type RangeElementBlockOutput = {
  __typename?: 'RangeElementBlockOutput';
  autocomplete?: Maybe<RangeElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<RangeElementBlockFacet>;
  items?: Maybe<Array<Maybe<RangeElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type RangeElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type RangeElementBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConditionCombination?: InputMaybe<IntFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Max?: InputMaybe<IntFilterInput>;
  Min?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PredefinedValue?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  SatisfiedAction?: InputMaybe<SearchableStringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  Step?: InputMaybe<IntFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<RangeElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<RangeElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<RangeElementBlockWhereInput>>>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Int']>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE'
}

export type ResetButtonElementBlock = IContent & {
  __typename?: 'ResetButtonElementBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type ResetButtonElementBlockAutocomplete = {
  __typename?: 'ResetButtonElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ResetButtonElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ResetButtonElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ResetButtonElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ResetButtonElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ResetButtonElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ResetButtonElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type ResetButtonElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type ResetButtonElementBlockFacet = {
  __typename?: 'ResetButtonElementBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ResetButtonElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ResetButtonElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ResetButtonElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ResetButtonElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ResetButtonElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ResetButtonElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ResetButtonElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ResetButtonElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ResetButtonElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ResetButtonElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ResetButtonElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ResetButtonElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ResetButtonElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ResetButtonElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ResetButtonElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type ResetButtonElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ResetButtonElementBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ResetButtonElementBlockOutput = {
  __typename?: 'ResetButtonElementBlockOutput';
  autocomplete?: Maybe<ResetButtonElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<ResetButtonElementBlockFacet>;
  items?: Maybe<Array<Maybe<ResetButtonElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type ResetButtonElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type ResetButtonElementBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ResetButtonElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ResetButtonElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ResetButtonElementBlockWhereInput>>>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SelectionElementBlock = IContent & {
  __typename?: 'SelectionElementBlock';
  AllowMultiSelect?: Maybe<Scalars['Bool']>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  AutoComplete?: Maybe<Scalars['Int']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConditionCombination?: Maybe<Scalars['Int']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Feed?: Maybe<Scalars['String']>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  PlaceHolder?: Maybe<Scalars['String']>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  SatisfiedAction?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  Validators?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type SelectionElementBlockAutocomplete = {
  __typename?: 'SelectionElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type SelectionElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SelectionElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SelectionElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SelectionElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SelectionElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SelectionElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SelectionElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type SelectionElementBlockFacet = {
  __typename?: 'SelectionElementBlockFacet';
  AllowMultiSelect?: Maybe<Array<Maybe<StringFacet>>>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  AutoComplete?: Maybe<Array<Maybe<NumberFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConditionCombination?: Maybe<Array<Maybe<NumberFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Feed?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PlaceHolder?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  SatisfiedAction?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Validators?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SelectionElementBlockFacetAllowMultiSelectArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetAutoCompleteArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type SelectionElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type SelectionElementBlockFacetConditionCombinationArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type SelectionElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type SelectionElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetFeedArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetPlaceHolderArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetSatisfiedActionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type SelectionElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type SelectionElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type SelectionElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SelectionElementBlockFacetValidatorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SelectionElementBlockOrderByInput = {
  AllowMultiSelect?: InputMaybe<OrderBy>;
  Ancestors?: InputMaybe<OrderBy>;
  AutoComplete?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConditionCombination?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Feed?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PlaceHolder?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  SatisfiedAction?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Validators?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type SelectionElementBlockOutput = {
  __typename?: 'SelectionElementBlockOutput';
  autocomplete?: Maybe<SelectionElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<SelectionElementBlockFacet>;
  items?: Maybe<Array<Maybe<SelectionElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type SelectionElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type SelectionElementBlockWhereInput = {
  AllowMultiSelect?: InputMaybe<BoolFilterInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  AutoComplete?: InputMaybe<IntFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConditionCombination?: InputMaybe<IntFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Feed?: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PlaceHolder?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  SatisfiedAction?: InputMaybe<SearchableStringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Validators?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<SelectionElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SelectionElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SelectionElementBlockWhereInput>>>;
};

export type SiteDefinition = {
  __typename?: 'SiteDefinition';
  ContentLink?: Maybe<ContentModelReference>;
  ContentRoots?: Maybe<ContentRootsModel>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  EditLocation?: Maybe<Scalars['String']>;
  Hosts?: Maybe<Array<Maybe<HostDefinitionModel>>>;
  Id?: Maybe<Scalars['String']>;
  Languages?: Maybe<Array<Maybe<SiteDefinitionLanguageModel>>>;
  Name?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type SiteDefinitionAutocomplete = {
  __typename?: 'SiteDefinitionAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentRoots?: Maybe<ContentRootsModelAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  EditLocation?: Maybe<Array<Maybe<Scalars['String']>>>;
  Hosts?: Maybe<HostDefinitionModelAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']>>>;
  Languages?: Maybe<SiteDefinitionLanguageModelAutocomplete>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type SiteDefinitionAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SiteDefinitionAutocompleteEditLocationArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SiteDefinitionAutocompleteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SiteDefinitionAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type SiteDefinitionFacet = {
  __typename?: 'SiteDefinitionFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentRoots?: Maybe<ContentRootsModelFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  EditLocation?: Maybe<Array<Maybe<StringFacet>>>;
  Hosts?: Maybe<HostDefinitionModelFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Languages?: Maybe<SiteDefinitionLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SiteDefinitionFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetEditLocationArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteDefinitionLanguageModel = {
  __typename?: 'SiteDefinitionLanguageModel';
  DisplayName?: Maybe<Scalars['String']>;
  IsMasterLanguage?: Maybe<Scalars['Bool']>;
  Name?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
  UrlSegment?: Maybe<Scalars['String']>;
};

export type SiteDefinitionLanguageModelAutocomplete = {
  __typename?: 'SiteDefinitionLanguageModelAutocomplete';
  DisplayName?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
  UrlSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type SiteDefinitionLanguageModelAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SiteDefinitionLanguageModelAutocompleteNameArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SiteDefinitionLanguageModelAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SiteDefinitionLanguageModelAutocompleteUrlSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type SiteDefinitionLanguageModelFacet = {
  __typename?: 'SiteDefinitionLanguageModelFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  IsMasterLanguage?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  UrlSegment?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SiteDefinitionLanguageModelFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetIsMasterLanguageArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetUrlSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteDefinitionLanguageModelOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  IsMasterLanguage?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  UrlSegment?: InputMaybe<OrderBy>;
};

export type SiteDefinitionLanguageModelWhereInput = {
  DisplayName?: InputMaybe<StringFilterInput>;
  IsMasterLanguage?: InputMaybe<BoolFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  UrlSegment?: InputMaybe<StringFilterInput>;
};

export type SiteDefinitionOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentRoots?: InputMaybe<ContentRootsModelOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  EditLocation?: InputMaybe<OrderBy>;
  Hosts?: InputMaybe<HostDefinitionModelOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  Languages?: InputMaybe<SiteDefinitionLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type SiteDefinitionOutput = {
  __typename?: 'SiteDefinitionOutput';
  autocomplete?: Maybe<SiteDefinitionAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<SiteDefinitionFacet>;
  items?: Maybe<Array<Maybe<SiteDefinition>>>;
  total?: Maybe<Scalars['Int']>;
};


export type SiteDefinitionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type SiteDefinitionWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentRoots?: InputMaybe<ContentRootsModelWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  EditLocation?: InputMaybe<StringFilterInput>;
  Hosts?: InputMaybe<HostDefinitionModelWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  Languages?: InputMaybe<SiteDefinitionLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SubmitButtonElementBlock = IContent & {
  __typename?: 'SubmitButtonElementBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConditionCombination?: Maybe<Scalars['Int']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FinalizeForm?: Maybe<Scalars['Bool']>;
  Image?: Maybe<Scalars['String']>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RedirectToPage?: Maybe<Scalars['String']>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  SatisfiedAction?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type SubmitButtonElementBlockAutocomplete = {
  __typename?: 'SubmitButtonElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Image?: Maybe<Array<Maybe<Scalars['String']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RedirectToPage?: Maybe<Array<Maybe<Scalars['String']>>>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type SubmitButtonElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SubmitButtonElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SubmitButtonElementBlockAutocompleteImageArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SubmitButtonElementBlockAutocompleteRedirectToPageArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SubmitButtonElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SubmitButtonElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SubmitButtonElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SubmitButtonElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type SubmitButtonElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type SubmitButtonElementBlockFacet = {
  __typename?: 'SubmitButtonElementBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConditionCombination?: Maybe<Array<Maybe<NumberFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  FinalizeForm?: Maybe<Array<Maybe<StringFacet>>>;
  Image?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RedirectToPage?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  SatisfiedAction?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SubmitButtonElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type SubmitButtonElementBlockFacetConditionCombinationArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type SubmitButtonElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type SubmitButtonElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetFinalizeFormArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetImageArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetRedirectToPageArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetSatisfiedActionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type SubmitButtonElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type SubmitButtonElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SubmitButtonElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type SubmitButtonElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SubmitButtonElementBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConditionCombination?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  FinalizeForm?: InputMaybe<OrderBy>;
  Image?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RedirectToPage?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  SatisfiedAction?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type SubmitButtonElementBlockOutput = {
  __typename?: 'SubmitButtonElementBlockOutput';
  autocomplete?: Maybe<SubmitButtonElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<SubmitButtonElementBlockFacet>;
  items?: Maybe<Array<Maybe<SubmitButtonElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type SubmitButtonElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type SubmitButtonElementBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConditionCombination?: InputMaybe<IntFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  FinalizeForm?: InputMaybe<BoolFilterInput>;
  Image?: InputMaybe<StringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RedirectToPage?: InputMaybe<StringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  SatisfiedAction?: InputMaybe<SearchableStringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<SubmitButtonElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SubmitButtonElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SubmitButtonElementBlockWhereInput>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type TextareaElementBlock = IContent & {
  __typename?: 'TextareaElementBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  AutoComplete?: Maybe<Scalars['Int']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConditionCombination?: Maybe<Scalars['Int']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  PlaceHolder?: Maybe<Scalars['String']>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  SatisfiedAction?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  Validators?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type TextareaElementBlockAutocomplete = {
  __typename?: 'TextareaElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TextareaElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextareaElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextareaElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextareaElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextareaElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextareaElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextareaElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type TextareaElementBlockFacet = {
  __typename?: 'TextareaElementBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  AutoComplete?: Maybe<Array<Maybe<NumberFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConditionCombination?: Maybe<Array<Maybe<NumberFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PlaceHolder?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  SatisfiedAction?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Validators?: Maybe<Array<Maybe<StringFacet>>>;
};


export type TextareaElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetAutoCompleteArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type TextareaElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type TextareaElementBlockFacetConditionCombinationArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type TextareaElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type TextareaElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetPlaceHolderArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetSatisfiedActionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type TextareaElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type TextareaElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type TextareaElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextareaElementBlockFacetValidatorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type TextareaElementBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  AutoComplete?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConditionCombination?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PlaceHolder?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  SatisfiedAction?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Validators?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type TextareaElementBlockOutput = {
  __typename?: 'TextareaElementBlockOutput';
  autocomplete?: Maybe<TextareaElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<TextareaElementBlockFacet>;
  items?: Maybe<Array<Maybe<TextareaElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type TextareaElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type TextareaElementBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  AutoComplete?: InputMaybe<IntFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConditionCombination?: InputMaybe<IntFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PlaceHolder?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  SatisfiedAction?: InputMaybe<SearchableStringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Validators?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<TextareaElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TextareaElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TextareaElementBlockWhereInput>>>;
};

export type TextboxElementBlock = IContent & {
  __typename?: 'TextboxElementBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  AutoComplete?: Maybe<Scalars['Int']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConditionCombination?: Maybe<Scalars['Int']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  PlaceHolder?: Maybe<Scalars['String']>;
  PredefinedValue?: Maybe<Scalars['String']>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  SatisfiedAction?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  Validators?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type TextboxElementBlockAutocomplete = {
  __typename?: 'TextboxElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TextboxElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextboxElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextboxElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextboxElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextboxElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextboxElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type TextboxElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type TextboxElementBlockFacet = {
  __typename?: 'TextboxElementBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  AutoComplete?: Maybe<Array<Maybe<NumberFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConditionCombination?: Maybe<Array<Maybe<NumberFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PlaceHolder?: Maybe<Array<Maybe<StringFacet>>>;
  PredefinedValue?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  SatisfiedAction?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Validators?: Maybe<Array<Maybe<StringFacet>>>;
};


export type TextboxElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetAutoCompleteArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type TextboxElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type TextboxElementBlockFacetConditionCombinationArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type TextboxElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type TextboxElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetPlaceHolderArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetPredefinedValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetSatisfiedActionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type TextboxElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type TextboxElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type TextboxElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextboxElementBlockFacetValidatorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type TextboxElementBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  AutoComplete?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConditionCombination?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PlaceHolder?: InputMaybe<OrderBy>;
  PredefinedValue?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  SatisfiedAction?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Validators?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type TextboxElementBlockOutput = {
  __typename?: 'TextboxElementBlockOutput';
  autocomplete?: Maybe<TextboxElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<TextboxElementBlockFacet>;
  items?: Maybe<Array<Maybe<TextboxElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type TextboxElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type TextboxElementBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  AutoComplete?: InputMaybe<IntFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConditionCombination?: InputMaybe<IntFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PlaceHolder?: InputMaybe<SearchableStringFilterInput>;
  PredefinedValue?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  SatisfiedAction?: InputMaybe<SearchableStringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Validators?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<TextboxElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TextboxElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TextboxElementBlockWhereInput>>>;
};

export type UrlElementBlock = IContent & {
  __typename?: 'UrlElementBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ConditionCombination?: Maybe<Scalars['Int']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  Description?: Maybe<Scalars['String']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Label?: Maybe<Scalars['String']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  PlaceHolder?: Maybe<Scalars['String']>;
  PredefinedValue?: Maybe<Scalars['String']>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  SatisfiedAction?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  Validators?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type UrlElementBlockAutocomplete = {
  __typename?: 'UrlElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UrlElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type UrlElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type UrlElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type UrlElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type UrlElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type UrlElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type UrlElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type UrlElementBlockFacet = {
  __typename?: 'UrlElementBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ConditionCombination?: Maybe<Array<Maybe<NumberFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PlaceHolder?: Maybe<Array<Maybe<StringFacet>>>;
  PredefinedValue?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  SatisfiedAction?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Validators?: Maybe<Array<Maybe<StringFacet>>>;
};


export type UrlElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type UrlElementBlockFacetConditionCombinationArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type UrlElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type UrlElementBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetPlaceHolderArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetPredefinedValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetSatisfiedActionArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type UrlElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type UrlElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type UrlElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type UrlElementBlockFacetValidatorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type UrlElementBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ConditionCombination?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PlaceHolder?: InputMaybe<OrderBy>;
  PredefinedValue?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  SatisfiedAction?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Validators?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type UrlElementBlockOutput = {
  __typename?: 'UrlElementBlockOutput';
  autocomplete?: Maybe<UrlElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<UrlElementBlockFacet>;
  items?: Maybe<Array<Maybe<UrlElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type UrlElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type UrlElementBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ConditionCombination?: InputMaybe<IntFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PlaceHolder?: InputMaybe<SearchableStringFilterInput>;
  PredefinedValue?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  SatisfiedAction?: InputMaybe<SearchableStringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Validators?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<UrlElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<UrlElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<UrlElementBlockWhereInput>>>;
};

export type VisitorDataHiddenElementBlock = IContent & {
  __typename?: 'VisitorDataHiddenElementBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  Created?: Maybe<Scalars['Date']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']>;
  RouteSegment?: Maybe<Scalars['String']>;
  Saved?: Maybe<Scalars['Date']>;
  SiteId?: Maybe<Scalars['String']>;
  StartPublish?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  StopPublish?: Maybe<Scalars['Date']>;
  Url?: Maybe<Scalars['String']>;
  VisitorDataSources?: Maybe<Scalars['String']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']>>>;
  _modified?: Maybe<Scalars['Date']>;
  _score?: Maybe<Scalars['Float']>;
};

export type VisitorDataHiddenElementBlockAutocomplete = {
  __typename?: 'VisitorDataHiddenElementBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VisitorDataHiddenElementBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type VisitorDataHiddenElementBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type VisitorDataHiddenElementBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type VisitorDataHiddenElementBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type VisitorDataHiddenElementBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type VisitorDataHiddenElementBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};


export type VisitorDataHiddenElementBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int'];
  value: Scalars['String'];
};

export type VisitorDataHiddenElementBlockFacet = {
  __typename?: 'VisitorDataHiddenElementBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  VisitorDataSources?: Maybe<Array<Maybe<StringFacet>>>;
};


export type VisitorDataHiddenElementBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VisitorDataHiddenElementBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type VisitorDataHiddenElementBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VisitorDataHiddenElementBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type VisitorDataHiddenElementBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VisitorDataHiddenElementBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VisitorDataHiddenElementBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VisitorDataHiddenElementBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VisitorDataHiddenElementBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type VisitorDataHiddenElementBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VisitorDataHiddenElementBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type VisitorDataHiddenElementBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VisitorDataHiddenElementBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']>;
};


export type VisitorDataHiddenElementBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VisitorDataHiddenElementBlockFacetVisitorDataSourcesArgs = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type VisitorDataHiddenElementBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  VisitorDataSources?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type VisitorDataHiddenElementBlockOutput = {
  __typename?: 'VisitorDataHiddenElementBlockOutput';
  autocomplete?: Maybe<VisitorDataHiddenElementBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']>;
  facets?: Maybe<VisitorDataHiddenElementBlockFacet>;
  items?: Maybe<Array<Maybe<VisitorDataHiddenElementBlock>>>;
  total?: Maybe<Scalars['Int']>;
};


export type VisitorDataHiddenElementBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']>;
};

export type VisitorDataHiddenElementBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  VisitorDataSources?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<VisitorDataHiddenElementBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VisitorDataHiddenElementBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VisitorDataHiddenElementBlockWhereInput>>>;
};

export type ArtistAutocompleteQueryVariables = Exact<{
  searchParam: Scalars['String'];
}>;


export type ArtistAutocompleteQuery = { __typename?: 'Query', ArtistDetailsPage?: { __typename?: 'ArtistDetailsPageOutput', autocomplete?: { __typename?: 'ArtistDetailsPageAutocomplete', StageName?: Array<string | null> | null, ArtistName?: Array<string | null> | null } | null } | null };

export type ArtistSearchQueryVariables = Exact<{
  searchParam: Scalars['String'];
  locales: Locales;
  order?: InputMaybe<OrderBy>;
}>;


export type ArtistSearchQuery = { __typename?: 'Query', ArtistDetailsPage?: { __typename?: 'ArtistDetailsPageOutput', items?: Array<{ __typename?: 'ArtistDetailsPage', PerformanceStartTime?: any | null, PerformanceEndTime?: any | null, StageName?: string | null, ArtistName?: string | null, ArtistPhoto?: string | null, ArtistGenre?: string | null, ArtistDescription?: string | null, ArtistIsHeadliner?: any | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | null> | null, facets?: { __typename?: 'ArtistDetailsPageFacet', ArtistName?: Array<{ __typename?: 'StringFacet', name?: string | null, count?: number | null } | null> | null, StageName?: Array<{ __typename?: 'StringFacet', name?: string | null, count?: number | null } | null> | null } | null } | null };

export type OtherContentSearchQueryVariables = Exact<{
  searchParam: Scalars['String'];
  locales: Locales;
  order?: InputMaybe<OrderBy>;
}>;


export type OtherContentSearchQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', items?: Array<{ __typename?: 'ArtistContainerPage', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'ArtistDetailsPage', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'BuyTicketBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'CaptchaElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'ChoiceElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'Content', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'ContentBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'FileUploadElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'FormContainerBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'FormStepBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'ImageChoiceElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'ImageFile', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'ImagePage', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'LandingPage', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'NumberElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'ParagraphTextElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'PredefinedHiddenElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'RangeElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'ResetButtonElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'SelectionElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'SubmitButtonElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'TextareaElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'TextboxElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'UrlElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename?: 'VisitorDataHiddenElementBlock', Name?: string | null, RelativePath?: string | null, _fulltext?: Array<string | null> | null, ContentType?: Array<string | null> | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | null> | null, facets?: { __typename?: 'ContentFacet', Name?: Array<{ __typename?: 'StringFacet', name?: string | null, count?: number | null } | null> | null } | null } | null };

export type StartQueryVariables = Exact<{
  relativePath?: InputMaybe<Scalars['String']>;
  locales: Locales;
  language?: InputMaybe<Scalars['String']>;
  stageName?: InputMaybe<Scalars['String']>;
  artistGenre?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['Int']>;
  workId?: InputMaybe<Scalars['Int']>;
  statusEqual?: InputMaybe<Scalars['String']>;
  isCommonDraft?: InputMaybe<Scalars['Boolean']>;
}>;


export type StartQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', items?: Array<{ __typename: 'ArtistContainerPage', Name?: string | null, RelativePath?: string | null, Url?: string | null, artists?: { __typename?: 'QueryRef', ArtistDetailsPage?: { __typename?: 'ArtistDetailsPageOutput', items?: Array<{ __typename?: 'ArtistDetailsPage', PerformanceStartTime?: any | null, PerformanceEndTime?: any | null, StageName?: string | null, ArtistName?: string | null, ArtistPhoto?: string | null, ArtistGenre?: string | null, ArtistDescription?: string | null, ArtistIsHeadliner?: any | null, Name?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | null> | null, facets?: { __typename?: 'ArtistDetailsPageFacet', ArtistGenre?: Array<{ __typename?: 'StringFacet', name?: string | null, count?: number | null } | null> | null, StageName?: Array<{ __typename?: 'StringFacet', name?: string | null, count?: number | null } | null> | null } | null } | null } | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'ArtistDetailsPage', Name?: string | null, Url?: string | null, RelativePath?: string | null, PerformanceStartTime?: any | null, PerformanceEndTime?: any | null, StageName?: string | null, ArtistName?: string | null, ArtistPhoto?: string | null, ArtistGenre?: string | null, ArtistDescription?: string | null, ArtistIsHeadliner?: any | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'BuyTicketBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'CaptchaElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'ChoiceElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'Content', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'ContentBlock', Title?: string | null, Image?: string | null, ImageAlignment?: string | null, Content?: string | null, Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'FileUploadElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'FormContainerBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ContentType?: Array<string | null> | null, SubmitSuccessMessage?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null, FormModel?: { __typename?: 'FormContainerBlockModel', Template?: string | null } | null, ContentLink?: { __typename?: 'ContentModelReference', Id?: number | null, WorkId?: number | null } | null, ElementsArea?: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink?: { __typename?: 'ContentModelReferenceSearch', Expanded?: { __typename: 'ArtistContainerPage' } | { __typename: 'ArtistDetailsPage' } | { __typename: 'BuyTicketBlock' } | { __typename: 'CaptchaElementBlock' } | { __typename: 'ChoiceElementBlock' } | { __typename: 'Content' } | { __typename: 'ContentBlock' } | { __typename: 'FileUploadElementBlock' } | { __typename: 'FormContainerBlock' } | { __typename: 'FormStepBlock' } | { __typename: 'ImageChoiceElementBlock' } | { __typename: 'ImageFile' } | { __typename: 'ImagePage' } | { __typename: 'LandingPage' } | { __typename: 'NumberElementBlock' } | { __typename: 'ParagraphTextElementBlock' } | { __typename: 'PredefinedHiddenElementBlock' } | { __typename: 'RangeElementBlock' } | { __typename: 'ResetButtonElementBlock' } | { __typename: 'SelectionElementBlock' } | { __typename: 'SubmitButtonElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'TextareaElementBlock' } | { __typename: 'TextboxElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'UrlElementBlock' } | { __typename: 'VisitorDataHiddenElementBlock' } | null } | null } | null> | null } | { __typename: 'FormStepBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'ImageChoiceElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'ImageFile', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'ImagePage', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'LandingPage', Name?: string | null, Url?: string | null, RelativePath?: string | null, Title?: string | null, Subtitle?: string | null, HeroImage?: string | null, _children?: { __typename?: 'QueryRef', ArtistContainerPage?: { __typename?: 'ArtistContainerPageOutput', items?: Array<{ __typename?: 'ArtistContainerPage', Name?: string | null, RelativePath?: string | null, headlines?: { __typename?: 'QueryRef', ArtistDetailsPage?: { __typename?: 'ArtistDetailsPageOutput', items?: Array<{ __typename?: 'ArtistDetailsPage', PerformanceStartTime?: any | null, PerformanceEndTime?: any | null, StageName?: string | null, ArtistName?: string | null, ArtistPhoto?: string | null, ArtistGenre?: string | null, ArtistDescription?: string | null, ArtistIsHeadliner?: any | null, Name?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | null> | null } | null } | null } | null> | null } | null } | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null, BuyTicketBlock?: { __typename?: 'LandingPageBlockData', Heading?: string | null, Message?: string | null } | null, ArtistsLink?: { __typename?: 'ContentModelReference', Expanded?: { __typename?: 'ArtistContainerPage', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ArtistDetailsPage', Name?: string | null, RelativePath?: string | null } | { __typename?: 'BuyTicketBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'CaptchaElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ChoiceElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'Content', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ContentBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'FileUploadElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'FormContainerBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'FormStepBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ImageChoiceElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ImageFile', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ImagePage', Name?: string | null, RelativePath?: string | null } | { __typename?: 'LandingPage', Name?: string | null, RelativePath?: string | null } | { __typename?: 'NumberElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ParagraphTextElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'PredefinedHiddenElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'RangeElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ResetButtonElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'SelectionElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'SubmitButtonElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'TextareaElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'TextboxElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'UrlElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'VisitorDataHiddenElementBlock', Name?: string | null, RelativePath?: string | null } | null } | null, MainContentArea?: Array<{ __typename?: 'ContentAreaItemModel', ContentLink?: { __typename?: 'ContentModelReference', Expanded?: { __typename: 'ArtistContainerPage' } | { __typename: 'ArtistDetailsPage' } | { __typename: 'BuyTicketBlock' } | { __typename: 'CaptchaElementBlock' } | { __typename: 'ChoiceElementBlock' } | { __typename: 'Content' } | { __typename: 'ContentBlock', Title?: string | null, Image?: string | null, ImageAlignment?: string | null, Content?: string | null } | { __typename: 'FileUploadElementBlock' } | { __typename: 'FormContainerBlock', ContentType?: Array<string | null> | null, SubmitSuccessMessage?: string | null, FormModel?: { __typename?: 'FormContainerBlockModel', Template?: string | null } | null, ContentLink?: { __typename?: 'ContentModelReference', Id?: number | null, WorkId?: number | null } | null, ElementsArea?: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink?: { __typename?: 'ContentModelReferenceSearch', Expanded?: { __typename: 'ArtistContainerPage' } | { __typename: 'ArtistDetailsPage' } | { __typename: 'BuyTicketBlock' } | { __typename: 'CaptchaElementBlock' } | { __typename: 'ChoiceElementBlock' } | { __typename: 'Content' } | { __typename: 'ContentBlock' } | { __typename: 'FileUploadElementBlock' } | { __typename: 'FormContainerBlock' } | { __typename: 'FormStepBlock' } | { __typename: 'ImageChoiceElementBlock' } | { __typename: 'ImageFile' } | { __typename: 'ImagePage' } | { __typename: 'LandingPage' } | { __typename: 'NumberElementBlock' } | { __typename: 'ParagraphTextElementBlock' } | { __typename: 'PredefinedHiddenElementBlock' } | { __typename: 'RangeElementBlock' } | { __typename: 'ResetButtonElementBlock' } | { __typename: 'SelectionElementBlock' } | { __typename: 'SubmitButtonElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'TextareaElementBlock' } | { __typename: 'TextboxElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'UrlElementBlock' } | { __typename: 'VisitorDataHiddenElementBlock' } | null } | null } | null> | null } | { __typename: 'FormStepBlock' } | { __typename: 'ImageChoiceElementBlock' } | { __typename: 'ImageFile', Content?: string | null, Url?: string | null, Thumbnail?: { __typename?: 'BlobModel', Url?: string | null } | null } | { __typename: 'ImagePage' } | { __typename: 'LandingPage' } | { __typename: 'NumberElementBlock' } | { __typename: 'ParagraphTextElementBlock' } | { __typename: 'PredefinedHiddenElementBlock' } | { __typename: 'RangeElementBlock' } | { __typename: 'ResetButtonElementBlock' } | { __typename: 'SelectionElementBlock' } | { __typename: 'SubmitButtonElementBlock' } | { __typename: 'TextareaElementBlock' } | { __typename: 'TextboxElementBlock' } | { __typename: 'UrlElementBlock' } | { __typename: 'VisitorDataHiddenElementBlock' } | null } | null } | null> | null, FooterContentArea?: Array<{ __typename?: 'ContentAreaItemModel', ContentLink?: { __typename?: 'ContentModelReference', Expanded?: { __typename: 'ArtistContainerPage' } | { __typename: 'ArtistDetailsPage' } | { __typename: 'BuyTicketBlock' } | { __typename: 'CaptchaElementBlock' } | { __typename: 'ChoiceElementBlock' } | { __typename: 'Content' } | { __typename: 'ContentBlock', Title?: string | null, Image?: string | null, ImageAlignment?: string | null, Content?: string | null } | { __typename: 'FileUploadElementBlock' } | { __typename: 'FormContainerBlock', ContentType?: Array<string | null> | null, SubmitSuccessMessage?: string | null, FormModel?: { __typename?: 'FormContainerBlockModel', Template?: string | null } | null, ContentLink?: { __typename?: 'ContentModelReference', Id?: number | null, WorkId?: number | null } | null, ElementsArea?: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink?: { __typename?: 'ContentModelReferenceSearch', Expanded?: { __typename: 'ArtistContainerPage' } | { __typename: 'ArtistDetailsPage' } | { __typename: 'BuyTicketBlock' } | { __typename: 'CaptchaElementBlock' } | { __typename: 'ChoiceElementBlock' } | { __typename: 'Content' } | { __typename: 'ContentBlock' } | { __typename: 'FileUploadElementBlock' } | { __typename: 'FormContainerBlock' } | { __typename: 'FormStepBlock' } | { __typename: 'ImageChoiceElementBlock' } | { __typename: 'ImageFile' } | { __typename: 'ImagePage' } | { __typename: 'LandingPage' } | { __typename: 'NumberElementBlock' } | { __typename: 'ParagraphTextElementBlock' } | { __typename: 'PredefinedHiddenElementBlock' } | { __typename: 'RangeElementBlock' } | { __typename: 'ResetButtonElementBlock' } | { __typename: 'SelectionElementBlock' } | { __typename: 'SubmitButtonElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'TextareaElementBlock' } | { __typename: 'TextboxElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'UrlElementBlock' } | { __typename: 'VisitorDataHiddenElementBlock' } | null } | null } | null> | null } | { __typename: 'FormStepBlock' } | { __typename: 'ImageChoiceElementBlock' } | { __typename: 'ImageFile', Content?: string | null, Url?: string | null, Thumbnail?: { __typename?: 'BlobModel', Url?: string | null } | null } | { __typename: 'ImagePage' } | { __typename: 'LandingPage' } | { __typename: 'NumberElementBlock' } | { __typename: 'ParagraphTextElementBlock' } | { __typename: 'PredefinedHiddenElementBlock' } | { __typename: 'RangeElementBlock' } | { __typename: 'ResetButtonElementBlock' } | { __typename: 'SelectionElementBlock' } | { __typename: 'SubmitButtonElementBlock' } | { __typename: 'TextareaElementBlock' } | { __typename: 'TextboxElementBlock' } | { __typename: 'UrlElementBlock' } | { __typename: 'VisitorDataHiddenElementBlock' } | null } | null } | null> | null } | { __typename: 'NumberElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'ParagraphTextElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'PredefinedHiddenElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'RangeElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'ResetButtonElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'SelectionElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'SubmitButtonElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'TextareaElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'TextboxElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'UrlElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | { __typename: 'VisitorDataHiddenElementBlock', Name?: string | null, Url?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null } | null> | null } | null };

export type ArtistDetailsPageFragment = { __typename?: 'ArtistDetailsPage', PerformanceStartTime?: any | null, PerformanceEndTime?: any | null, StageName?: string | null, ArtistName?: string | null, ArtistPhoto?: string | null, ArtistGenre?: string | null, ArtistDescription?: string | null, ArtistIsHeadliner?: any | null, Name?: string | null, RelativePath?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null } | null };

export type ContentBlockFragment = { __typename?: 'ContentBlock', Title?: string | null, Image?: string | null, ImageAlignment?: string | null, Content?: string | null };

type ElementsAreaFragment_ArtistContainerPage_Fragment = { __typename: 'ArtistContainerPage' };

type ElementsAreaFragment_ArtistDetailsPage_Fragment = { __typename: 'ArtistDetailsPage' };

type ElementsAreaFragment_BuyTicketBlock_Fragment = { __typename: 'BuyTicketBlock' };

type ElementsAreaFragment_CaptchaElementBlock_Fragment = { __typename: 'CaptchaElementBlock' };

type ElementsAreaFragment_ChoiceElementBlock_Fragment = { __typename: 'ChoiceElementBlock' };

type ElementsAreaFragment_Content_Fragment = { __typename: 'Content' };

type ElementsAreaFragment_ContentBlock_Fragment = { __typename: 'ContentBlock' };

type ElementsAreaFragment_FileUploadElementBlock_Fragment = { __typename: 'FileUploadElementBlock' };

type ElementsAreaFragment_FormContainerBlock_Fragment = { __typename: 'FormContainerBlock' };

type ElementsAreaFragment_FormStepBlock_Fragment = { __typename: 'FormStepBlock' };

type ElementsAreaFragment_ImageChoiceElementBlock_Fragment = { __typename: 'ImageChoiceElementBlock' };

type ElementsAreaFragment_ImageFile_Fragment = { __typename: 'ImageFile' };

type ElementsAreaFragment_ImagePage_Fragment = { __typename: 'ImagePage' };

type ElementsAreaFragment_LandingPage_Fragment = { __typename: 'LandingPage' };

type ElementsAreaFragment_NumberElementBlock_Fragment = { __typename: 'NumberElementBlock' };

type ElementsAreaFragment_ParagraphTextElementBlock_Fragment = { __typename: 'ParagraphTextElementBlock' };

type ElementsAreaFragment_PredefinedHiddenElementBlock_Fragment = { __typename: 'PredefinedHiddenElementBlock' };

type ElementsAreaFragment_RangeElementBlock_Fragment = { __typename: 'RangeElementBlock' };

type ElementsAreaFragment_ResetButtonElementBlock_Fragment = { __typename: 'ResetButtonElementBlock' };

type ElementsAreaFragment_SelectionElementBlock_Fragment = { __typename: 'SelectionElementBlock' };

type ElementsAreaFragment_SubmitButtonElementBlock_Fragment = { __typename: 'SubmitButtonElementBlock', Name?: string | null, ContentType?: Array<string | null> | null };

type ElementsAreaFragment_TextareaElementBlock_Fragment = { __typename: 'TextareaElementBlock' };

type ElementsAreaFragment_TextboxElementBlock_Fragment = { __typename: 'TextboxElementBlock', Name?: string | null, ContentType?: Array<string | null> | null };

type ElementsAreaFragment_UrlElementBlock_Fragment = { __typename: 'UrlElementBlock' };

type ElementsAreaFragment_VisitorDataHiddenElementBlock_Fragment = { __typename: 'VisitorDataHiddenElementBlock' };

export type ElementsAreaFragmentFragment = ElementsAreaFragment_ArtistContainerPage_Fragment | ElementsAreaFragment_ArtistDetailsPage_Fragment | ElementsAreaFragment_BuyTicketBlock_Fragment | ElementsAreaFragment_CaptchaElementBlock_Fragment | ElementsAreaFragment_ChoiceElementBlock_Fragment | ElementsAreaFragment_Content_Fragment | ElementsAreaFragment_ContentBlock_Fragment | ElementsAreaFragment_FileUploadElementBlock_Fragment | ElementsAreaFragment_FormContainerBlock_Fragment | ElementsAreaFragment_FormStepBlock_Fragment | ElementsAreaFragment_ImageChoiceElementBlock_Fragment | ElementsAreaFragment_ImageFile_Fragment | ElementsAreaFragment_ImagePage_Fragment | ElementsAreaFragment_LandingPage_Fragment | ElementsAreaFragment_NumberElementBlock_Fragment | ElementsAreaFragment_ParagraphTextElementBlock_Fragment | ElementsAreaFragment_PredefinedHiddenElementBlock_Fragment | ElementsAreaFragment_RangeElementBlock_Fragment | ElementsAreaFragment_ResetButtonElementBlock_Fragment | ElementsAreaFragment_SelectionElementBlock_Fragment | ElementsAreaFragment_SubmitButtonElementBlock_Fragment | ElementsAreaFragment_TextareaElementBlock_Fragment | ElementsAreaFragment_TextboxElementBlock_Fragment | ElementsAreaFragment_UrlElementBlock_Fragment | ElementsAreaFragment_VisitorDataHiddenElementBlock_Fragment;

export type FormContainerBlockFragmentFragment = { __typename?: 'FormContainerBlock', ContentType?: Array<string | null> | null, SubmitSuccessMessage?: string | null, FormModel?: { __typename?: 'FormContainerBlockModel', Template?: string | null } | null, ContentLink?: { __typename?: 'ContentModelReference', Id?: number | null, WorkId?: number | null } | null, ElementsArea?: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink?: { __typename?: 'ContentModelReferenceSearch', Expanded?: { __typename: 'ArtistContainerPage' } | { __typename: 'ArtistDetailsPage' } | { __typename: 'BuyTicketBlock' } | { __typename: 'CaptchaElementBlock' } | { __typename: 'ChoiceElementBlock' } | { __typename: 'Content' } | { __typename: 'ContentBlock' } | { __typename: 'FileUploadElementBlock' } | { __typename: 'FormContainerBlock' } | { __typename: 'FormStepBlock' } | { __typename: 'ImageChoiceElementBlock' } | { __typename: 'ImageFile' } | { __typename: 'ImagePage' } | { __typename: 'LandingPage' } | { __typename: 'NumberElementBlock' } | { __typename: 'ParagraphTextElementBlock' } | { __typename: 'PredefinedHiddenElementBlock' } | { __typename: 'RangeElementBlock' } | { __typename: 'ResetButtonElementBlock' } | { __typename: 'SelectionElementBlock' } | { __typename: 'SubmitButtonElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'TextareaElementBlock' } | { __typename: 'TextboxElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'UrlElementBlock' } | { __typename: 'VisitorDataHiddenElementBlock' } | null } | null } | null> | null };

export type ImageFileFragment = { __typename?: 'ImageFile', Content?: string | null, Url?: string | null, Thumbnail?: { __typename?: 'BlobModel', Url?: string | null } | null };

type ItemsInContentArea_ArtistContainerPage_Fragment = { __typename: 'ArtistContainerPage' };

type ItemsInContentArea_ArtistDetailsPage_Fragment = { __typename: 'ArtistDetailsPage' };

type ItemsInContentArea_BuyTicketBlock_Fragment = { __typename: 'BuyTicketBlock' };

type ItemsInContentArea_CaptchaElementBlock_Fragment = { __typename: 'CaptchaElementBlock' };

type ItemsInContentArea_ChoiceElementBlock_Fragment = { __typename: 'ChoiceElementBlock' };

type ItemsInContentArea_Content_Fragment = { __typename: 'Content' };

type ItemsInContentArea_ContentBlock_Fragment = { __typename: 'ContentBlock', Title?: string | null, Image?: string | null, ImageAlignment?: string | null, Content?: string | null };

type ItemsInContentArea_FileUploadElementBlock_Fragment = { __typename: 'FileUploadElementBlock' };

type ItemsInContentArea_FormContainerBlock_Fragment = { __typename: 'FormContainerBlock', ContentType?: Array<string | null> | null, SubmitSuccessMessage?: string | null, FormModel?: { __typename?: 'FormContainerBlockModel', Template?: string | null } | null, ContentLink?: { __typename?: 'ContentModelReference', Id?: number | null, WorkId?: number | null } | null, ElementsArea?: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink?: { __typename?: 'ContentModelReferenceSearch', Expanded?: { __typename: 'ArtistContainerPage' } | { __typename: 'ArtistDetailsPage' } | { __typename: 'BuyTicketBlock' } | { __typename: 'CaptchaElementBlock' } | { __typename: 'ChoiceElementBlock' } | { __typename: 'Content' } | { __typename: 'ContentBlock' } | { __typename: 'FileUploadElementBlock' } | { __typename: 'FormContainerBlock' } | { __typename: 'FormStepBlock' } | { __typename: 'ImageChoiceElementBlock' } | { __typename: 'ImageFile' } | { __typename: 'ImagePage' } | { __typename: 'LandingPage' } | { __typename: 'NumberElementBlock' } | { __typename: 'ParagraphTextElementBlock' } | { __typename: 'PredefinedHiddenElementBlock' } | { __typename: 'RangeElementBlock' } | { __typename: 'ResetButtonElementBlock' } | { __typename: 'SelectionElementBlock' } | { __typename: 'SubmitButtonElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'TextareaElementBlock' } | { __typename: 'TextboxElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'UrlElementBlock' } | { __typename: 'VisitorDataHiddenElementBlock' } | null } | null } | null> | null };

type ItemsInContentArea_FormStepBlock_Fragment = { __typename: 'FormStepBlock' };

type ItemsInContentArea_ImageChoiceElementBlock_Fragment = { __typename: 'ImageChoiceElementBlock' };

type ItemsInContentArea_ImageFile_Fragment = { __typename: 'ImageFile', Content?: string | null, Url?: string | null, Thumbnail?: { __typename?: 'BlobModel', Url?: string | null } | null };

type ItemsInContentArea_ImagePage_Fragment = { __typename: 'ImagePage' };

type ItemsInContentArea_LandingPage_Fragment = { __typename: 'LandingPage' };

type ItemsInContentArea_NumberElementBlock_Fragment = { __typename: 'NumberElementBlock' };

type ItemsInContentArea_ParagraphTextElementBlock_Fragment = { __typename: 'ParagraphTextElementBlock' };

type ItemsInContentArea_PredefinedHiddenElementBlock_Fragment = { __typename: 'PredefinedHiddenElementBlock' };

type ItemsInContentArea_RangeElementBlock_Fragment = { __typename: 'RangeElementBlock' };

type ItemsInContentArea_ResetButtonElementBlock_Fragment = { __typename: 'ResetButtonElementBlock' };

type ItemsInContentArea_SelectionElementBlock_Fragment = { __typename: 'SelectionElementBlock' };

type ItemsInContentArea_SubmitButtonElementBlock_Fragment = { __typename: 'SubmitButtonElementBlock' };

type ItemsInContentArea_TextareaElementBlock_Fragment = { __typename: 'TextareaElementBlock' };

type ItemsInContentArea_TextboxElementBlock_Fragment = { __typename: 'TextboxElementBlock' };

type ItemsInContentArea_UrlElementBlock_Fragment = { __typename: 'UrlElementBlock' };

type ItemsInContentArea_VisitorDataHiddenElementBlock_Fragment = { __typename: 'VisitorDataHiddenElementBlock' };

export type ItemsInContentAreaFragment = ItemsInContentArea_ArtistContainerPage_Fragment | ItemsInContentArea_ArtistDetailsPage_Fragment | ItemsInContentArea_BuyTicketBlock_Fragment | ItemsInContentArea_CaptchaElementBlock_Fragment | ItemsInContentArea_ChoiceElementBlock_Fragment | ItemsInContentArea_Content_Fragment | ItemsInContentArea_ContentBlock_Fragment | ItemsInContentArea_FileUploadElementBlock_Fragment | ItemsInContentArea_FormContainerBlock_Fragment | ItemsInContentArea_FormStepBlock_Fragment | ItemsInContentArea_ImageChoiceElementBlock_Fragment | ItemsInContentArea_ImageFile_Fragment | ItemsInContentArea_ImagePage_Fragment | ItemsInContentArea_LandingPage_Fragment | ItemsInContentArea_NumberElementBlock_Fragment | ItemsInContentArea_ParagraphTextElementBlock_Fragment | ItemsInContentArea_PredefinedHiddenElementBlock_Fragment | ItemsInContentArea_RangeElementBlock_Fragment | ItemsInContentArea_ResetButtonElementBlock_Fragment | ItemsInContentArea_SelectionElementBlock_Fragment | ItemsInContentArea_SubmitButtonElementBlock_Fragment | ItemsInContentArea_TextareaElementBlock_Fragment | ItemsInContentArea_TextboxElementBlock_Fragment | ItemsInContentArea_UrlElementBlock_Fragment | ItemsInContentArea_VisitorDataHiddenElementBlock_Fragment;

export type LandingPageFragment = { __typename?: 'LandingPage', Title?: string | null, Subtitle?: string | null, HeroImage?: string | null, BuyTicketBlock?: { __typename?: 'LandingPageBlockData', Heading?: string | null, Message?: string | null } | null, ArtistsLink?: { __typename?: 'ContentModelReference', Expanded?: { __typename?: 'ArtistContainerPage', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ArtistDetailsPage', Name?: string | null, RelativePath?: string | null } | { __typename?: 'BuyTicketBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'CaptchaElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ChoiceElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'Content', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ContentBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'FileUploadElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'FormContainerBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'FormStepBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ImageChoiceElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ImageFile', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ImagePage', Name?: string | null, RelativePath?: string | null } | { __typename?: 'LandingPage', Name?: string | null, RelativePath?: string | null } | { __typename?: 'NumberElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ParagraphTextElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'PredefinedHiddenElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'RangeElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'ResetButtonElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'SelectionElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'SubmitButtonElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'TextareaElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'TextboxElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'UrlElementBlock', Name?: string | null, RelativePath?: string | null } | { __typename?: 'VisitorDataHiddenElementBlock', Name?: string | null, RelativePath?: string | null } | null } | null, MainContentArea?: Array<{ __typename?: 'ContentAreaItemModel', ContentLink?: { __typename?: 'ContentModelReference', Expanded?: { __typename: 'ArtistContainerPage' } | { __typename: 'ArtistDetailsPage' } | { __typename: 'BuyTicketBlock' } | { __typename: 'CaptchaElementBlock' } | { __typename: 'ChoiceElementBlock' } | { __typename: 'Content' } | { __typename: 'ContentBlock', Title?: string | null, Image?: string | null, ImageAlignment?: string | null, Content?: string | null } | { __typename: 'FileUploadElementBlock' } | { __typename: 'FormContainerBlock', ContentType?: Array<string | null> | null, SubmitSuccessMessage?: string | null, FormModel?: { __typename?: 'FormContainerBlockModel', Template?: string | null } | null, ContentLink?: { __typename?: 'ContentModelReference', Id?: number | null, WorkId?: number | null } | null, ElementsArea?: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink?: { __typename?: 'ContentModelReferenceSearch', Expanded?: { __typename: 'ArtistContainerPage' } | { __typename: 'ArtistDetailsPage' } | { __typename: 'BuyTicketBlock' } | { __typename: 'CaptchaElementBlock' } | { __typename: 'ChoiceElementBlock' } | { __typename: 'Content' } | { __typename: 'ContentBlock' } | { __typename: 'FileUploadElementBlock' } | { __typename: 'FormContainerBlock' } | { __typename: 'FormStepBlock' } | { __typename: 'ImageChoiceElementBlock' } | { __typename: 'ImageFile' } | { __typename: 'ImagePage' } | { __typename: 'LandingPage' } | { __typename: 'NumberElementBlock' } | { __typename: 'ParagraphTextElementBlock' } | { __typename: 'PredefinedHiddenElementBlock' } | { __typename: 'RangeElementBlock' } | { __typename: 'ResetButtonElementBlock' } | { __typename: 'SelectionElementBlock' } | { __typename: 'SubmitButtonElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'TextareaElementBlock' } | { __typename: 'TextboxElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'UrlElementBlock' } | { __typename: 'VisitorDataHiddenElementBlock' } | null } | null } | null> | null } | { __typename: 'FormStepBlock' } | { __typename: 'ImageChoiceElementBlock' } | { __typename: 'ImageFile', Content?: string | null, Url?: string | null, Thumbnail?: { __typename?: 'BlobModel', Url?: string | null } | null } | { __typename: 'ImagePage' } | { __typename: 'LandingPage' } | { __typename: 'NumberElementBlock' } | { __typename: 'ParagraphTextElementBlock' } | { __typename: 'PredefinedHiddenElementBlock' } | { __typename: 'RangeElementBlock' } | { __typename: 'ResetButtonElementBlock' } | { __typename: 'SelectionElementBlock' } | { __typename: 'SubmitButtonElementBlock' } | { __typename: 'TextareaElementBlock' } | { __typename: 'TextboxElementBlock' } | { __typename: 'UrlElementBlock' } | { __typename: 'VisitorDataHiddenElementBlock' } | null } | null } | null> | null, FooterContentArea?: Array<{ __typename?: 'ContentAreaItemModel', ContentLink?: { __typename?: 'ContentModelReference', Expanded?: { __typename: 'ArtistContainerPage' } | { __typename: 'ArtistDetailsPage' } | { __typename: 'BuyTicketBlock' } | { __typename: 'CaptchaElementBlock' } | { __typename: 'ChoiceElementBlock' } | { __typename: 'Content' } | { __typename: 'ContentBlock', Title?: string | null, Image?: string | null, ImageAlignment?: string | null, Content?: string | null } | { __typename: 'FileUploadElementBlock' } | { __typename: 'FormContainerBlock', ContentType?: Array<string | null> | null, SubmitSuccessMessage?: string | null, FormModel?: { __typename?: 'FormContainerBlockModel', Template?: string | null } | null, ContentLink?: { __typename?: 'ContentModelReference', Id?: number | null, WorkId?: number | null } | null, ElementsArea?: Array<{ __typename?: 'ContentAreaItemModelSearch', ContentLink?: { __typename?: 'ContentModelReferenceSearch', Expanded?: { __typename: 'ArtistContainerPage' } | { __typename: 'ArtistDetailsPage' } | { __typename: 'BuyTicketBlock' } | { __typename: 'CaptchaElementBlock' } | { __typename: 'ChoiceElementBlock' } | { __typename: 'Content' } | { __typename: 'ContentBlock' } | { __typename: 'FileUploadElementBlock' } | { __typename: 'FormContainerBlock' } | { __typename: 'FormStepBlock' } | { __typename: 'ImageChoiceElementBlock' } | { __typename: 'ImageFile' } | { __typename: 'ImagePage' } | { __typename: 'LandingPage' } | { __typename: 'NumberElementBlock' } | { __typename: 'ParagraphTextElementBlock' } | { __typename: 'PredefinedHiddenElementBlock' } | { __typename: 'RangeElementBlock' } | { __typename: 'ResetButtonElementBlock' } | { __typename: 'SelectionElementBlock' } | { __typename: 'SubmitButtonElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'TextareaElementBlock' } | { __typename: 'TextboxElementBlock', Name?: string | null, ContentType?: Array<string | null> | null } | { __typename: 'UrlElementBlock' } | { __typename: 'VisitorDataHiddenElementBlock' } | null } | null } | null> | null } | { __typename: 'FormStepBlock' } | { __typename: 'ImageChoiceElementBlock' } | { __typename: 'ImageFile', Content?: string | null, Url?: string | null, Thumbnail?: { __typename?: 'BlobModel', Url?: string | null } | null } | { __typename: 'ImagePage' } | { __typename: 'LandingPage' } | { __typename: 'NumberElementBlock' } | { __typename: 'ParagraphTextElementBlock' } | { __typename: 'PredefinedHiddenElementBlock' } | { __typename: 'RangeElementBlock' } | { __typename: 'ResetButtonElementBlock' } | { __typename: 'SelectionElementBlock' } | { __typename: 'SubmitButtonElementBlock' } | { __typename: 'TextareaElementBlock' } | { __typename: 'TextboxElementBlock' } | { __typename: 'UrlElementBlock' } | { __typename: 'VisitorDataHiddenElementBlock' } | null } | null } | null> | null };

export type LandingPageBlockDataFragment = { __typename?: 'LandingPageBlockData', Heading?: string | null, Message?: string | null };

export type SubmitButtonElementBlockFragmentFragment = { __typename?: 'SubmitButtonElementBlock', Name?: string | null, ContentType?: Array<string | null> | null };

export type TextboxElementBlockFragmentFragment = { __typename?: 'TextboxElementBlock', Name?: string | null, ContentType?: Array<string | null> | null };

export const ArtistDetailsPageFragmentDoc = `
    fragment ArtistDetailsPage on ArtistDetailsPage {
  PerformanceStartTime
  PerformanceEndTime
  StageName
  ArtistName
  ArtistPhoto
  ArtistGenre
  ArtistDescription
  ArtistIsHeadliner
  Name
  RelativePath
  ParentLink {
    Url
  }
}
    `;
export const LandingPageBlockDataFragmentDoc = `
    fragment LandingPageBlockData on LandingPageBlockData {
  Heading
  Message
}
    `;
export const ContentBlockFragmentDoc = `
    fragment ContentBlock on ContentBlock {
  Title
  Image
  ImageAlignment
  Content
}
    `;
export const ImageFileFragmentDoc = `
    fragment ImageFile on ImageFile {
  Thumbnail {
    Url
  }
  Content
  Url
}
    `;
export const TextboxElementBlockFragmentFragmentDoc = `
    fragment TextboxElementBlockFragment on TextboxElementBlock {
  Name
  ContentType
}
    `;
export const SubmitButtonElementBlockFragmentFragmentDoc = `
    fragment SubmitButtonElementBlockFragment on SubmitButtonElementBlock {
  Name
  ContentType
}
    `;
export const ElementsAreaFragmentFragmentDoc = `
    fragment ElementsAreaFragment on IContent {
  __typename
  ... on TextboxElementBlock {
    ...TextboxElementBlockFragment
  }
  ... on SubmitButtonElementBlock {
    ...SubmitButtonElementBlockFragment
  }
}
    `;
export const FormContainerBlockFragmentFragmentDoc = `
    fragment FormContainerBlockFragment on FormContainerBlock {
  ContentType
  SubmitSuccessMessage
  FormModel {
    Template
  }
  ContentLink {
    Id
    WorkId
  }
  ElementsArea {
    ContentLink {
      Expanded {
        ...ElementsAreaFragment
      }
    }
  }
}
    `;
export const ItemsInContentAreaFragmentDoc = `
    fragment ItemsInContentArea on IContent {
  __typename
  ... on ContentBlock {
    ...ContentBlock
  }
  ... on ImageFile {
    ...ImageFile
  }
  ... on FormContainerBlock {
    ...FormContainerBlockFragment
  }
}
    `;
export const LandingPageFragmentDoc = `
    fragment LandingPage on LandingPage {
  Title
  Subtitle
  BuyTicketBlock {
    ...LandingPageBlockData
  }
  HeroImage
  ArtistsLink {
    Expanded {
      Name
      RelativePath
    }
  }
  MainContentArea {
    ContentLink {
      Expanded {
        ...ItemsInContentArea
      }
    }
  }
  FooterContentArea {
    ContentLink {
      Expanded {
        ...ItemsInContentArea
      }
    }
  }
}
    `;
export const ArtistAutocompleteDocument = `
    query ArtistAutocomplete($searchParam: String!) {
  ArtistDetailsPage {
    autocomplete {
      StageName(value: $searchParam)
      ArtistName(value: $searchParam, limit: 3)
    }
  }
}
    `;
export const useArtistAutocompleteQuery = <
      TData = ArtistAutocompleteQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: ArtistAutocompleteQueryVariables,
      options?: UseQueryOptions<ArtistAutocompleteQuery, TError, TData>
    ) =>
    useQuery<ArtistAutocompleteQuery, TError, TData>(
      ['ArtistAutocomplete', variables],
      fetcher<ArtistAutocompleteQuery, ArtistAutocompleteQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, ArtistAutocompleteDocument, variables),
      options
    );
export const ArtistSearchDocument = `
    query ArtistSearch($searchParam: String!, $locales: Locales!, $order: OrderBy) {
  ArtistDetailsPage(
    locale: [$locales]
    orderBy: {_ranking: RELEVANCE, ArtistName: $order}
    where: {_or: [{Name: {contains: $searchParam, boost: 10}}, {Name: {startsWith: $searchParam, boost: 10}}, {StageName: {startsWith: $searchParam}}]}
  ) {
    items {
      PerformanceStartTime
      PerformanceEndTime
      StageName
      ArtistName
      ArtistPhoto
      ArtistGenre
      ArtistDescription
      ArtistIsHeadliner
      RelativePath
      ParentLink {
        Url
      }
      _fulltext
    }
    facets {
      ArtistName(orderBy: ASC, orderType: VALUE, limit: 100) {
        name
        count
      }
      StageName(orderBy: ASC, orderType: VALUE, limit: 100) {
        name
        count
      }
    }
  }
}
    `;
export const useArtistSearchQuery = <
      TData = ArtistSearchQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: ArtistSearchQueryVariables,
      options?: UseQueryOptions<ArtistSearchQuery, TError, TData>
    ) =>
    useQuery<ArtistSearchQuery, TError, TData>(
      ['ArtistSearch', variables],
      fetcher<ArtistSearchQuery, ArtistSearchQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, ArtistSearchDocument, variables),
      options
    );
export const OtherContentSearchDocument = `
    query OtherContentSearch($searchParam: String!, $locales: Locales!, $order: OrderBy) {
  Content(
    locale: [$locales]
    orderBy: {_ranking: RELEVANCE, Name: $order}
    where: {_or: [{Name: {contains: $searchParam, boost: 10}}, {Name: {startsWith: $searchParam, boost: 10}}], _and: {ContentType: {notEq: "ArtistDetailsPage"}}}
  ) {
    items {
      Name
      RelativePath
      ParentLink {
        Url
      }
      _fulltext
      ContentType
    }
    facets {
      Name(orderBy: ASC, orderType: VALUE, limit: 100) {
        name
        count
      }
    }
  }
}
    `;
export const useOtherContentSearchQuery = <
      TData = OtherContentSearchQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: OtherContentSearchQueryVariables,
      options?: UseQueryOptions<OtherContentSearchQuery, TError, TData>
    ) =>
    useQuery<OtherContentSearchQuery, TError, TData>(
      ['OtherContentSearch', variables],
      fetcher<OtherContentSearchQuery, OtherContentSearchQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, OtherContentSearchDocument, variables),
      options
    );
export const StartDocument = `
    query Start($relativePath: String, $locales: Locales!, $language: String, $stageName: String, $artistGenre: String, $contentId: Int, $workId: Int, $statusEqual: String, $isCommonDraft: Boolean) {
  Content(
    locale: [$locales]
    where: {ContentLink: {WorkId: {eq: $workId}, Id: {eq: $contentId}}, RelativePath: {eq: $relativePath}, Language: {Name: {eq: $language}}, Status: {eq: $statusEqual}, IsCommonDraft: {eq: $isCommonDraft}}
    orderBy: {Saved: DESC}
    limit: 1
  ) {
    items {
      Name
      ParentLink {
        Url
      }
      Url
      __typename
      RelativePath
      ... on LandingPage {
        ...LandingPage
        _children {
          ArtistContainerPage {
            items {
              Name
              RelativePath
              headlines: _children {
                ArtistDetailsPage(
                  where: {ArtistIsHeadliner: {eq: true}}
                  orderBy: {PerformanceStartTime: ASC, Name: ASC}
                ) {
                  items {
                    ...ArtistDetailsPage
                  }
                }
              }
            }
          }
        }
      }
      ... on ArtistContainerPage {
        Name
        RelativePath
        artists: _children {
          ArtistDetailsPage(
            where: {StageName: {eq: $stageName}, ArtistGenre: {eq: $artistGenre}, Status: {eq: "Published"}}
            orderBy: {Name: ASC, ArtistIsHeadliner: ASC, PerformanceStartTime: ASC, StageName: ASC}
            limit: 100
          ) {
            items {
              ...ArtistDetailsPage
            }
            facets {
              ArtistGenre(orderType: VALUE, orderBy: ASC, limit: 10) {
                name
                count
              }
              StageName(orderType: VALUE, orderBy: ASC, limit: 10) {
                name
                count
              }
            }
          }
        }
      }
      ... on ArtistDetailsPage {
        ...ArtistDetailsPage
      }
      ... on ContentBlock {
        Title
        Image
        ImageAlignment
        Content
      }
      ... on FormContainerBlock {
        ...FormContainerBlockFragment
      }
    }
  }
}
    ${LandingPageFragmentDoc}
${LandingPageBlockDataFragmentDoc}
${ItemsInContentAreaFragmentDoc}
${ContentBlockFragmentDoc}
${ImageFileFragmentDoc}
${FormContainerBlockFragmentFragmentDoc}
${ElementsAreaFragmentFragmentDoc}
${TextboxElementBlockFragmentFragmentDoc}
${SubmitButtonElementBlockFragmentFragmentDoc}
${ArtistDetailsPageFragmentDoc}`;
export const useStartQuery = <
      TData = StartQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: StartQueryVariables,
      options?: UseQueryOptions<StartQuery, TError, TData>
    ) =>
    useQuery<StartQuery, TError, TData>(
      ['Start', variables],
      fetcher<StartQuery, StartQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, StartDocument, variables),
      options
    );