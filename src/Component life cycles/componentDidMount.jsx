import React, { PureComponent } from 'react';

export class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            producList: [],
        };
    }

    async componentDidMount() {
        try {
            analytics.page('Home');
            const producList = await productApi.getAll();
            this.setState({ producList, loading: false });
        } catch (error) {
            console.error('Error fetching products:', error);
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading, producList } = this.state;
        if (loading) {
            return <Loader />;
        }

        return <ProductList producList={producList}/>
    }
}