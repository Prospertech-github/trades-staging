import loader from "./stylesheets/loader.module.css"

const Loader = () => {
  return (
    <section className={loader.loaderCtn}> 
      <div className={loader.loader}></div>
    </section>
  );
}
 
export default Loader;