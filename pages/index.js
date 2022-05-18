import { createClient } from 'next-sanity';

export default function IndexPage({ users }) {
   return (
      <>
         <header>
            <h1>Next.js + Sanity</h1>
         </header>
         <main>
            <h2>Number of Users</h2>
            {users.length > 0 && (
               <ul>
                  {users.map((user) => (
                     <li key={user._id}>{user?.name}</li>
                  ))}
               </ul>
            )}
            {!users.length > 0 && <p>No users to show</p>}
            {users.length > 0 && (
               <div>
                  <div>XD</div>
                  <p>
                     If i'm doing this correctly then the data will show up here
                     when i've configured everything correctly
                  </p>
               </div>
            )}
         </main>
      </>
   );
}

const client = createClient({
    projectId; "",
    dataset: "",
    apiVersion: "",
    useCdn: false
})
export async function getStaticProps() {
   const users = [
      /* 
        _createdAt:
        _id:
        _rev:
        type: "user"
        _updatedAt:
        name:

        */
   ];

   return {
      props: {
         users,
      },
   };
}
