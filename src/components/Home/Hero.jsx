import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    
    <section className="pt-12 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
                <div className="self-center lg:col-span-4">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Hello👋 I'm Vansh Chauhan.</h1>
                    <p className="mt-5 text-base font-normal leading-7 text-gray-500">I'm a Software Engineer. As a software engineer, I have hands-on experience with a wide range of modern technologies including ReactJS, Redux, Node.js, Express, MongoDB, Prisma, Serverless, SQL, Next.js, TypeScript, AWS, and Linux.</p>
                    <div className="relative inline-flex mt-9 group">
                        <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                        <a
                            href="https://linktr.ee/vanshchauhan279"
                            title=""
                            target='_blank'
                            className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            role="button"
                        >
                            Connect with me
                        </a>
                    </div>
                    
                </div>

                <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
                    <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">⚡️ Latest Blogs</p>

                    <div className="mt-6 space-y-6 lg:space-y-8">
                        <div className="relative overflow-hidden">
                            <div className="flex items-start lg:items-center">
                                <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIs2SyuTN4CzzF4obo5wxVC0dsOKs-pJcf7j_dt7lau99PXHX0Fa1pNgPq76btYZs2YEM&usqp=CAU" alt="" />
                                <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                    <Link href="#" title="">
                                    Next.js: Unleashing the Power of Server-Side Rendering
                                        <span className="absolute inset-0" aria-hidden="true"></span>
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="flex items-start lg:items-center">
                                <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRVGB0WPlBJeDT5zCponB8G4ktKdg8ji4Ug&s" alt="" />
                                <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                    <Link href="#" title="">
                                    Optimizing Performance in Next.js: Best Practices and Techniques
                                        <span className="absolute inset-0" aria-hidden="true"></span>
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="flex items-start lg:items-center">
                                <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsQDoTu_QAK3V2Fz_0tC0YDb2KaYVseFrRQ&s" alt="" />
                                <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                    <Link href="#" title="">
                                    Mastering Linux: Essential Tips and Tricks for Beginners
                                        <span className="absolute inset-0" aria-hidden="true"></span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="self-end lg:col-span-5">
                    <img className="w-full h-max mx-auto rounded-lg" src="/vanshpic.jpg" alt="Vansh IMAGE" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
