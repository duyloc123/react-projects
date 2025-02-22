import React from 'react'

// import data
import data from "../data/data"

function Todolist() {

  const [user, setUser] = React.useState(data);

  function btnDone(id) {
    const findId = user.findIndex((item) => item.id === id);
    const userNew = [...user];
    userNew[findId].status = "Done";
    setUser(userNew);
  }

  function btnInProgess(id) {
    const findId = user.findIndex((item) => item.id === id);
    const userNew = [...user];
    userNew[findId].status = "In progress";
    setUser(userNew);
    console.log(user);
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-3xl
      text-blue-500 mt-6 '>
        Todo List
      </h1>
      <div class="relative overflow-x-auto max-sm:mx-5 mt-5">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead class="max-sm:text-[10px] text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Name
                  </th>
                  <th scope="col" class="px-6 py-3 max-sm:px-2">
                      Age
                  </th>
                  <th scope="col" class="px-6 py-3">
                      City
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Status
                  </th>
              </tr>
          </thead>
          <tbody>
            {user.map((item) => (
              item.status === "Done"
              ? <tr
              class="max-sm:text-[10px] bg-white border-b
              dark:bg-gray-800 dark:border-gray-700 border-gray-200 line-through"
              key={item.id}>
                <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap uppercase">
                    {item.name}
                </th>
                <td class="px-6 py-4 max-sm:px-2">
                    {item.age}
                </td>
                <td class="px-6 py-4">
                    {item.city}
                </td>
                <td class="px-6 py-4">
                    {item.status === "Done"
                     ? <div className='text-red-500 uppercase'>{item.status}</div>
                     : <div className='text-yellow-500 uppercares'>{item.status}</div>}
                </td>
                <td>
                  <div className='flex gap-2'>
                    <button
                    className='bg-red-400 p-2 rounded text-red-900 cursor-pointer'
                    onClick={() => btnDone(item.id)}
                    >
                      Done
                    </button>
                    <button
                    className='bg-yellow-400 p-2 rounded
                    text-yellow-900 cursor-pointer hidden'
                    onClick={() => btnInProgess(item.id)}
                    >
                      In progress
                    </button>
                  </div>
                </td>
                </tr>
              : <tr
              class="max-sm:text-[10px] bg-white border-b
              dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              key={item.id}>
                <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap uppercase">
                    {item.name}
                </th>
                <td class="px-6 py-4 max-sm:px-2">
                    {item.age}
                </td>
                <td class="px-6 py-4">
                    {item.city}
                </td>
                <td class="px-6 py-4">
                    {item.status === "Done"
                     ? <div className='text-red-500 uppercase'>{item.status}</div>
                     : <div className='text-yellow-500 uppercares'>{item.status}</div>}
                </td>
                <td>
                  <div className='flex gap-2'>
                    <button
                    className='bg-red-400 p-2 rounded text-red-900 cursor-pointer'
                    onClick={() => btnDone(item.id)}
                    >
                      Done
                    </button>
                    <button
                    className='bg-yellow-400 p-2 rounded text-yellow-900 cursor-pointer'
                    onClick={() => btnInProgess(item.id)}
                    >
                      In progress
                    </button>
                  </div>
                </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Todolist
