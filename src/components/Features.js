import FeatureItem from "./FeatureItem";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PercentIcon from '@mui/icons-material/Percent';
import DiamondIcon from '@mui/icons-material/Diamond';
const Features = () => {
  return (
    <div>
      <FeatureItem  icon={<QueryBuilderIcon/>} text="24/7" borderColor="green"/>
      <FeatureItem icon={<PercentIcon/>} text="Great offers" borderColor="orange"/>
      <FeatureItem  icons={<DiamondIcon/>} text="Quality" borderColor="purple"/>
    </div>
  );
};
export default Features;
