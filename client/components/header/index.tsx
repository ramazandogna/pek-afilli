export default function Header() {
  return (
    <nav className="fixed left-0 top-0 flex w-full p-3 shadow backdrop-blur-md">
      <div className="container-wrap flex items-center justify-between ">
        <div>Header</div>
        <ul className="flex gap-3">
          <li className="cursor-pointer transition-all hover:scale-[102%] ">
            İtem 1
          </li>
          <li className="cursor-pointer transition-all hover:scale-[102%] ">
            İtem 2
          </li>
          <li className="cursor-pointer transition-all hover:scale-[102%] ">
            İtem 2
          </li>
        </ul>
      </div>
    </nav>
  );
}
