import NextAuth, { Session } from "next-auth"
import OktaProvider from 'next-auth/providers/okta'
import AzureADProvider from "next-auth/providers/azure-ad";
import { JWT } from "next-auth/jwt";
import EPiserverOidcProvider from "@/providers/EPiserverOidcProvider";
const prod = process.env.NODE_ENV === 'production'
export const authOptions: any = {
  providers: [
    OktaProvider({
        name: "Opti ID",
        clientId: `${process.env.OKTA_CLIENT_ID}`,
        issuer: `${process.env.OKTA_ISSUER}`,
        clientSecret: '',
        checks: ['pkce', 'state', 'nonce'],
        client: {
          token_endpoint_auth_method: 'none'
        },
        style: {
          logo: `${prod ? process.env.NEXTAUTH_URL : process.env.VERCEL_URL}/optimizely.png`,
          logoDark: `${prod ? process.env.NEXTAUTH_URL : process.env.VERCEL_URL}/optimizely.png`,
          bg: "#fff",
          text: "#000",
          bgDark: "#000",
          textDark: "#fff",
        }
      }),
    AzureADProvider({
      clientId: `${process.env.AZURE_AD_CLIENT_ID}`,
      clientSecret: `${process.env.AZURE_AD_CLIENT_SECRET}`,
      tenantId: `${process.env.AZURE_AD_TENANT_ID}`,
    }),
    EPiserverOidcProvider({
      clientId: `frontend`,
    }),
  ],
  callbacks: {
    async jwt(token: JWT ){
        return token
    },
    async session(session: Session){
        return session
      }
  }
}

export default NextAuth(authOptions)