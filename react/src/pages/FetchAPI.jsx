import React from 'react'

function FetchAPI() {

    const [user, setUser] = React.useState([]);

    React.useEffect(() => {
        async function fetchUser () {
            const response = await fetch("https://randomuser.me/api");
            const data = await response.json();
            setUser(data.results);
            console.log(user);
        }
        fetchUser();
    },[]);

  return (
    <div className='container mx-auto mt-10'>
        <div className='flex items-center flex-col'>
            <h1 className='text-2xl text-violet-500 mb-5'>Fetch API: Random User</h1>
            {user.map((itemUser) => (
                <div 
                class="relative flex w-96 flex-col rounded-lg border border-slate-200 bg-white shadow-sm"
                key={itemUser.id}
                >
                    <nav class="flex min-w-[240px] flex-col gap-1 p-1.5">
                        <div
                        role="button"
                        class="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                        >
                            <div class="mr-4 grid place-items-center">
                                <img
                                alt="candice"
                                src={itemUser.picture.large}
                                class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                                />
                            </div>
                            <div>
                                <h6 class="text-slate-800 font-medium">
                                {itemUser.name.title} {itemUser.name.first} {itemUser.name.last}
                                </h6>
                                <p class="text-slate-500 text-sm">
                                {itemUser.email}
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FetchAPI
