import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
    providers: [
        CredentialsProvider({
            name:"Credentials",
            credentials: {
                email: { label: "Email", type: "email"},
                password: {  label: "Password", type: "password" }
            },
            authorize: async(credentials)=>{
                const res=await axios.post("http://localhost:6915/apis/auth/login",credentials)
                const user=res.data.user

                if(user){
                    return user
                }else{
                    return null
                }
            },
            pages:{
                signIn:"/auth/signin",
            }
          
        })
    ]
})