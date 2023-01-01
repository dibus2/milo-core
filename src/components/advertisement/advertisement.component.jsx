import "./advertisement.styles.scss";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import StorageIcon from '@mui/icons-material/Storage';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import HubIcon from '@mui/icons-material/Hub';
import SpeedIcon from '@mui/icons-material/Speed';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions } from '../../utils/themes';

const theme = createTheme(themeOptions);

const Advertisement = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="adv-body-container">
                    <div className="adv-welcome-banner-container">
                        <div className="milo-banner-bundle">
                            <h1 className="milo-banner">LAC2 - MILO</h1>
                            <h3 className="milo-sub-banner">redefining Analytics for lenders...</h3>
                            <p>The only place where Machine Learning, Data Access and Data Wharehouse
                                come together to provide Lenders with unmatched Analytics experience.
                            </p>
                        </div>
                    </div>
                    <div className="adv-advantages-banner-container">
                        <h2>Discover MILO</h2>
                        <div className="adv-advantages-banner-bundle">
                            <div className="adv-advantages-1-container">
                                <div className="adv-advantage-1-bundle">
                                    <div className="title-with-icon">
                                        <SettingsSuggestIcon />
                                        <div className="title-description">
                                            <h3>ML-IO</h3>
                                            <p>MILO allows you to deploy your ML models into production
                                                in just a couple clicks. Save 10s of engineering hours
                                                and remove bottlenecks while letting your IT focus on their
                                                core duties.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="adv-advantages-2-container">
                                <div className="adv-advantage-2-bundle">
                                    <div className="title-with-icon">
                                        <CloudDownloadIcon />
                                        <div className="title-description">
                                            <h3>Data Hub</h3>
                                            <p>Add-click your favorite data sources from our library of partners.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="adv-advantages-3-container">
                                <div className="adv-advantage-3-bundle">
                                    <div className="title-with-icon">
                                        <StorageIcon />
                                        <div className="title-description">
                                            <h3>Data Warehouse</h3>
                                            <p>Access all your data, cleaned up and organize for ML and Analytics.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="adv-advantages-4-container">
                                <div className="adv-advantage-4-bundle">
                                    <div className="title-with-icon">
                                        <LibraryBooksIcon />
                                        <div className="title-description">
                                            <h3>Data Enhancement</h3>
                                            <p>Add attributes and industry specific generic scores to your UW direclty from our library.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="adv-advantages-5-container">
                                <div className="adv-advantage-5-bundle">
                                    <div className="title-with-icon">
                                        <StackedBarChartIcon />
                                        <div className="title-description">
                                            <h3>Insights</h3>
                                            <p>Analyse your data directly from LAC platform to immediately find Insights, publish dashboards.
                                                Assess the impact of our generic scores on the fly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="adv-advantages-6-container">
                                <div className="adv-advantage-6-bundle">
                                    <div className="title-with-icon">
                                        <HubIcon />
                                        <div className="title-description">
                                            <h3>Market Place</h3>
                                            <p>Leverage our wealth of marketting data to size and design buy boxes that fit your needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="adv-advantages-7-container">
                                <div className="adv-advantage-7-bundle">
                                    <div className="title-with-icon">
                                        <ImportExportIcon />
                                        <div className="title-description">
                                            <h3>Python Client</h3>
                                            <p>All actions are accessible via the web app but also from
                                                the python client. Allows your data scientists to interact
                                                with MILO directly from their prefered environment.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="adv-advantages-8-container">
                                <div className="adv-advantage-8-bundle">
                                    <div className="title-with-icon">
                                        <SpeedIcon />
                                        <div className="title-description">
                                            <h3>Unlimited Scalability</h3>
                                            <p>MILO uses advanced dockerization and Kubernetes technology
                                                to allow models to be scaled dynamically to fit your needs. That prevents long
                                                ad-hoc scaling processes and ensure you are not over spending on your infrastructure
                                                while providing virtually unlimited scalability potential.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
};

export default Advertisement;