import React from 'react'


// { params }: { params: { id: number } }
const Page = ({ post } : any) => {
  return (
    <main className='flex container flex-col min-h-[calc(100vh-104px)] mx-auto justify-start py-4 px-2 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80 w-full'>
      <div className=' bg-body-light dark:bg-navbar-dark rounded-xl border dark:border-none shadow'>
        <div className='flex w-full justify-center items-center px-10'>
          <h1 className='text-3xl'>post</h1>
        </div>
        <section className='flex w-full justify-start items-center p-2'>
          content
        </section>
        <section className='flex w-full justify-center items-center p-2 border-t'>
          comments
        </section>
      </div>
    </main>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   const paths = posts.map((post : any) => ({
//     params: { id: post.id },
//   }))

//   return { paths, fallback: false }
// }
// export async function getStaticProps({ params } : { params: { id: number } }) {
//   const res = await fetch(`https://.../posts/${params.id}`)
//   const post = await res.json()

//   return { props: { post } }
// }

export default Page