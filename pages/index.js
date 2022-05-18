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
   projectId: '3ho6qypw',
   dataset: 'production',
   apiVersion: '2022-05-18',
   useCdn: false,
});
export async function getStaticProps() {
   const users = await client.fetch(`*[_type == "user"]`);

   return {
      props: {
         users,
      },
   };
}
