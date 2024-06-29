import { Layout, Card, Statistic } from "antd";

const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
    padding: "1rem",
};

const AppSider = () => {
    return (
        <Layout.Sider width="25%" style={siderStyle}>
            Sider
            <Card style={{ marginBottom: "1rem" }}>
                <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: "#3f8600" }}
                    suffix="%"
                />
            </Card>
            <Card style={{ marginBottom: "1rem" }}>
                <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    suffix="%"
                />
            </Card>
        </Layout.Sider>
    );
};

export default AppSider;
