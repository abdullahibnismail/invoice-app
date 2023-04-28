// import { useSelector,useDispatch } from "react-redux";
// import { addStudent } from "./store/actions/studentActions";
// import SideBar from "./components/sideBar/SideBar";
import Landing from "./modules/landingPage/Landing";

function App() {


  // const student = useSelector((store:any) => store.studentReducer)
  // console.log("student Details",student);
  // const dispatch = useDispatch()
  // const addStudentDetail = () => {
  //   const roll = "12324356"
  //   dispatch(addStudent(roll))
  // }


  return (
    <div>
      {/* This is a Typescript App
      <button onClick={addStudentDetail}>Hello</button>
      <p>{student.name}</p>
      <p>{student.newData}</p> */}

      {/* <SideBar/>         */}
      <Landing/>

    </div>
  );
}

export default App;
