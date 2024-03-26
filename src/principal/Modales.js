import React from "react";
import BModal from "./Modal";

const Modales = React.FC = ({modales}) =>
{
    return (
        <section className="tiles">
            {

            modales.map((item, index) => {
            let number = +Number(index)+Number(1);
            return(
                <article className={"style"+index} key={item[0]}>
                    <span className="image">
                        <img src={"images/pic0"+number+".jpg"} alt="" />
                    </span>
                    <BModal modal={item}/>
                </article>
            )
            }
            )}

        </section>

    );
}

export default Modales;