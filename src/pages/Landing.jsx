import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";

function Landing() {
  const data = useLocation();
  const user = data.state?.user; // Use optional chaining to avoid errors if state or user is undefined

  if (!user) {
    // Handle case where there is no user data, possibly redirect or show an error message
    return <div>Invalid access, no user data found!</div>;
  }

  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header username={user} />
        {/* Card */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:03:34"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>
        {/* Todo Container */}
        <TodoContainer />
      </div>
    </div>
  );
}

export default Landing;
