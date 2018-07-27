import * as React from "react";
import { Image, StyleSheet, Text, View, VrButton } from "react-360";
import { connect, setCurrent } from "./Store";

class PostButton extends React.Component {
  state = {
    hover: false,
    index: 0
  };

  onMouseEnter = () => {
    this.setState({ hover: true });
    this.setState({ index: this.props.index });
  };

  // polyRandom = () => {
  //   Math.floor(Math.random() * 5);
  // };

  render() {
    // console.log(this.state.index);
    return (
      <VrButton
        style={styles.postButton}
        onEnter={this.onMouseEnter}
        onExit={() => this.setState({ hover: false })}
        onClick={() => setCurrent(this.props.index)}
      >
        <Image
          style={styles.postButtonPreview}
          source={{ uri: this.props.preview }}
        />
        <View
          style={[
            styles.postButtonInfo,
            this.state.hover ? styles.postButtonInfoHover : null
          ]}
        >
          <View style={styles.postButtonLabel}>
            <Text style={styles.postButtonName}>{this.props.name}</Text>
          </View>
          <View style={styles.postButtonLabel}>
            <Text style={styles.postButtonAuthor}>{this.props.author}</Text>
          </View>
        </View>
      </VrButton>
    );
  }
}

const TopPosts = props => {
  if (!props.posts) {
    return (
      <View style={styles.wrapper}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.header}>
        <VrButton onClick={() => setCurrent(Math.floor(Math.random() * 5))}>
          <Text style={{ color: "red", fontWeight: "bold" }}>NEXT</Text>
        </VrButton>
      </View>
      <View style={styles.wrapper}>
        {props.posts.map((post, i) => (
          <PostButton
            key={post.id}
            index={i}
            name={post.name}
            author={post.author}
            preview={post.preview}
          />
        ))}
      </View>
      {/* <Entity source={{ obj: asset("./static_assets/spiderman-scene.obj") }} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    height: 600,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderColor: "#303050",
    borderWidth: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  postButton: {
    height: 120,
    backgroundColor: "#000000",
    overflow: "hidden"
  },
  postButtonInfo: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    flexDirection: "column"
  },
  postButtonPreview: {
    width: "100%",
    height: 225
  },
  postButtonInfoHover: {
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  postButtonLabel: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: "flex-start"
  },
  postButtonName: {
    fontSize: 24
  },
  postButtonAuthor: {
    fontSize: 16
  },
  header: {
    display: "flex",
    flexDirection: "row"
  }
});

const ConnectedTopPosts = connect(TopPosts);

export default ConnectedTopPosts;
