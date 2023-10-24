import data from "../data/data.json";
import { useParams } from "react-router-dom";

const Detail = () => {
  // ! methode mit filter

  // * Wir holen uns die Daten aus dem Link
  // const idParams = useParams();
  // Wir bekommen immer den text nach dem "/dynamic-routing/"
  // console.log(idParams);
  // console.log(idParams.idName);

  //   // * Nun Filter wir die Daten nach der ID
  //   // Hier Picken wir sozusagen nurt den Datensatz raus der gerade benötigt wird. Er sucht nach der ID 2 === 2

  //   const detailuser = data.filter((item) => {
  //     return item.id.toString() === idParams.idName;
  //   });

  //   console.log(detailuser);

  //   return (
  //     <section>
  //       <h2>User Detail page:</h2>

  //       <h3>
  //         Name: {detailuser[0].firstName} {detailuser[0].lastName}
  //       </h3>
  //       <h4>Age: {detailuser[0].age}</h4>
  //       <p>Hobbys: {detailuser[0].hobbys}</p>
  //     </section>
  //   );
  // };

  // export default Detail;

  // !Methode mit find

  const { idName } = useParams();

  const detailuser = data.find((user) => {
    //!alles konvertiert in strings
    // console.log(user.id);
    // let string = String(user.id);
    // return string === idName;
    // console.log({ string, idName }, typeof string, typeof idName, "///");
    // !alles konvertiert in numbers

    return user.id === Number(idName);
  });

  // mit find kriegen nur ein object, also brauchen kein [0]

  console.log(detailuser);

  if (!detailuser) {
    return <div>Article not found</div>;
  }

  return (
    <section>
      <h2>User Detail page:</h2>
      <h3>
        Name: {detailuser.firstName} {detailuser.lastName}
      </h3>
      <h4>Age: {detailuser.age}</h4>
      <p>Hobbys: {detailuser.hobbys}</p>
    </section>
  );
};

export default Detail;
