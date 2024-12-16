import styles from "../assets/css/Services.module.css";
import services from "../utils/service";
function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.cardContainer}>
        {services.map((service) => (
          <div className={styles.card} key={service.id}>
            <h3 className={styles.cardTitle}>{service.name}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;
