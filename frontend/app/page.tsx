import ArticleCard from '@/components/ArticleCard/ArticleCard'
import SearchInput from '@/components/SearchInput/SearchInput'
import Image from 'next/image'
import dayjs from 'dayjs'

export default function Home() {
  return (
    <main className="flex container flex-col min-h-[calc(100vh-104px)] mx-auto justify-start py-4 px-2 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80 w-full">
      <div className='bg-body-light dark:bg-navbar-dark rounded-xl border dark:border-none shadow p-6'>
        <div className='w-full flex sm:hidden justify-center items-center relative'>
          <SearchInput />
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 my-4 justify-center items-center'>
          <ArticleCard id={1} title='fwfewfweregewrgwrgwegewrgwgwfewfe2fe2f2efe2f2ef2ef2fe2f2ef2ef2ef2ef2ef2essd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
          <ArticleCard id={1} title='dssd' views={0} createdAt={dayjs().toString()} author='artur'/>
        </div>
        <div className='flex w-full justify-center items-center'>
          <button className='p-1 text-center w-40 justify-center items-center border rounded-full hover:bg-slate-100 dark:hover:bg-[#333333] duration-75'>more articles</button>
        </div>
      </div>
      
      
    </main>
  )
}
