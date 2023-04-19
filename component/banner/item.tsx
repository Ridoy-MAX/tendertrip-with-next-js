
import styles from "./banner.module.css";
const Item = () => {
  return (
    
   
          <div className="col-md-4 mt-2">
            <div className={styles.box}>
            <div className={`${styles.card_img} ${styles.card}`}>
              
              <div className="card-body">
                <h3 className="card-title mb-2">Headline</h3>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            </div>
           
          </div>
       

       
  
  );
};

export default Item;
