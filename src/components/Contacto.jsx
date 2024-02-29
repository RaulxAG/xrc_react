export function Contacto() {
    return (
        <>
            <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between mt-5 pt-5 mb-5">
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <iframe className="border border-2 border-light rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.3826145298276!2d-3.6820017010040824!3d37.223613006015256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fe15f8e85a4f%3A0x5f81f326a03686f1!2sInstituto%20de%20Educaci%C3%B3n%20Secundaria%20Il%C3%ADberis!5e0!3m2!1ses!2ses!4v1709147401266!5m2!1ses!2ses" width="470" height="320" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
                <form className="container d-flex flex-column align-items-center justify-content-center mt-3 mt-lg-0">
                    <div class="mb-3 w-100">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-4 w-100">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="InputNombre" />
                    </div>

                    <div class="input-group">
                        <span class="input-group-text bg-body-secondary">Mensaje</span>
                        <textarea class="form-control" aria-label="Mensaje"></textarea>
                    </div>

                    <div className="input-group d-flex justify-content-end mt-4 mb-sm-5 mb-lg-0">
                        <input className="btn btn-success fw-bold col-12 col-lg-5" type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </>
    );
}