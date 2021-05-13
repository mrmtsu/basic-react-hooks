import { useEffect, useState, VFC } from "react"

export const CleanUp: VFC = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const incrementNum = () => {
    console.log("Mouse event invoked !");
    setCurrentNum((preNumber) => preNumber + 1);
  };

  useEffect(() => {
    console.log('useEffect in CleanUp invoked !');
    window.addEventListener("mousedown", incrementNum);
    return () => {
      console.log("Cleanup invoked !");
      window.removeEventListener("mousedown", incrementNum);
    }
  }, [])

  return (
    <div>
      {currentNum};
    </div>
  )
}
