<script type="text/babel" data-presets="env,react">
    class Clock extends React.Component {
        componentDidMount() {
            setInterval(() => {
                this.time = new Date().toLocaleTimeString()    
            }, 1000)
        }
        
        render() {
            return (
                <div className="time">
                    The time is: {this.time}
                </div>
            );
        }
    }


    // Renders the App component into a div with id 'root'
    ReactDOM.render(<Clock />, document.querySelector('#root'));
</script>



