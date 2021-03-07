
class Group {
    constructor(pObjeto){
        //pObjeto = {"groupName": groupName, "groupCreator":groupCreator, "destination" : destination}
        this.groupName = pObjeto.groupName;
        this.TimeRemaining;
        this.destination = pObjeto.destination;
        this.passengers = [pObjeto.groupCreator];
        this.groupCreator = pObjeto.groupCreator;
    }

    //SI FUNCIONA para añadir como que ya este ahi   
    AddPassenger(passegerToAdd){
        if(this.passengers.includes(passegerToAdd) == false){
            this.passengers.push(passegerToAdd);
        }else{
            return console.log(`${passegerToAdd} is already on the group!`);   
        }
    }
    
    //SI FUNCIONA TANnto para sacar como para cuando no esta en el grupo
    LeaveCongaCommand(passenger){
        if (this.passengers.includes(passenger) == true) {
            let i = this.passengers.indexOf( passenger );
             if ( i !== -1 ) {
                this.passengers.splice( i, 1 );
              }              
        }else{
            console.log("No estas en el grupo :) ");
        }
    }


    displayInfo(){
        let message = `Group name:${this.groupName} to ${this.destination} at ${conga.DepartureTime} with ${this.passengers} on it`;
        return message;
    }


    /* 
    JoinCongaCommand(self, passenger, destination){
        self.Lock.acquire()
        destination = destination.lower()
        res = ""


        # make sure conga line exists
        if destination in self.Congas:
            conga = self.Congas[destination]
            err = conga.AddPassenger(passenger)
            self.Lock.release()
            if err is not None:
                return err
            elif res == "":
                res = "%s jumped on the conga line to %s 🚂" % (passenger, conga.DisplayDestination)
                return res
            else:
                return res
        else:
            self.Lock.release()
            return "That conga line doesn't exist, please try again or find a new conga line to join 😫"
    } */
}


module.exports = {
    Group : Group,
}