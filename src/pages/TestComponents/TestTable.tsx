import React, { Component } from 'react';

interface DataProps {
  data: { title: string; description: string; category: string }[];
}

interface TestTableState {
  searchQuery: string;
}

class TestTable extends Component<DataProps, TestTableState> {
  constructor(props: DataProps) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { data } = this.props;
    const { searchQuery } = this.state;

    //Filter all the columns on the table
    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="container mt-5">
        {/* Search bar */}
        <div className="form-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Title, Description, or Brand"
            value={searchQuery}
            onChange={this.handleSearch}
          />
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((val, key) => (
                  <tr key={key}>
                    <td>{val.title}</td>
                    <td>{val.description}</td>
                    <td>{val.category}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center">No matching records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TestTable;
