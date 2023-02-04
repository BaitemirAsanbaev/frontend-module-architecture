import classes from './Backdrop.module.scss';

const Backdrop = ({hide}) => {
  return ( <div
  className={classes.Backdrop}
  onClick={(hide)}>

  </div> );
}
 
export default Backdrop;