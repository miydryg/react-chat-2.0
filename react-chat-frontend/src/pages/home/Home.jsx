
import { Header } from "../../components/Header/Header";
import { MessageContainer } from "../../components/messages/MessageContainer";
import { Sidebar } from "../../components/Sidebar/Sidebar";


const Home = () => {
  return (
    <div>
      <Header />

      <div className="main-chat">
        <div className="container">
          <MessageContainer />

          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
