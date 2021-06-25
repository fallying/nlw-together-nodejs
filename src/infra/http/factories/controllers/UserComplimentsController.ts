import { ListUserComplimentsReceivedController } from "../../../../modules/userCompliments/useCases/ListUserComplimentsReceived";
import { ListUserComplimentsSentController } from "../../../../modules/userCompliments/useCases/ListUserComplimentsSent";

const makeListUserComplimentsReceivedController =
  new ListUserComplimentsReceivedController();
const makeListUserComplimentsSentController =
  new ListUserComplimentsSentController();

export {
  makeListUserComplimentsReceivedController,
  makeListUserComplimentsSentController,
};
