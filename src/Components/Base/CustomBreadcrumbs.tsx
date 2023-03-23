import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface CustomBreadcrumbsProps {
  breadcrumbs?: JSX.Element[];
}

const CustomBreadcrumbs = ({ breadcrumbs }: CustomBreadcrumbsProps) => {
  if (!breadcrumbs) return null;
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
