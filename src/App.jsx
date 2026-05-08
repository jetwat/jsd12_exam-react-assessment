import { useState } from "react";

export default function App() {
  // ================================== //
  const [mode, setMode] = useState(null);
  const [members, setMembers] = useState([]);
  const fetchMembers = async () => {
  }
  
  // ================================== //
  console.log(mode);
  console.log(members);
  console.log(fetch("https://67eca027aa794fb3222e43e2.mockapi.io/members"));

  return (
    <div className="min-h-screen flex justify-center bg-blue-950">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">

        {/* ================== */}
        <section className="w-full p-6 bg-amber-100 font-extrabold flex gap-3">
          <button 
          type="button" 
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" 
          >
            Home
          </button>
          <button 
          type="button" 
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" 
          >
            Owner
          </button>
        </section>

        {/* ================== */}
        <h1 className="text-violet-200 font-bold">
          Home
        </h1>

        {/* ================== */}
        <section className="w-full p-5 bg-amber-100 flex gap-3">
          <button 
          onClick={() => {setMode('user')}} 
          type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" 
          >
            User Home Section
          </button>
          <button 
          onClick={() => {setMode('admin')}} 
          type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" 
          >
            Admin Home Section
          </button>
        </section>



        {/* ============= โหมดยูสเซอร์ ============= */}
        { mode === 'user' &&
          <section className="w-full p-5 bg-amber-100 flex gap-3">
            <h1>User Section</h1>
          </section>
        }

        {/* ============= โหมดแอดมิน ============= */}
        { mode === 'admin' &&
          <section className="w-full p-5 bg-amber-100 flex gap-3">
            <h1>Admin Section</h1>
          </section>
        }

      </div>
    </div>
  );
}
