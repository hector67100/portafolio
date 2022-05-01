import React from "react";

const Modales = React.FC = ({modal}) =>
{
    return (
        <section class="tiles">
            {
            modal.map((item, index) => {
            <article class={"style"+index}>
                <span class="image">
                    <img src={"images/pic0"+index+".jpg"} alt="" />
                </span>
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <h2>Randalls</h2>
                    <div class="content">
                        <p>Mostrar Imagen</p>
                    </div>
                </a>
            </article>
            }
            )}

        </section>

    );
}

export default Modales;