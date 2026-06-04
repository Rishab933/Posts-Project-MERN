import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log("Submitting Post Data:", { caption, imagePreview });

    const formData = new FormData(e.target);

    axios.post("http://localhost:3000/create-post", formData).then((res) => {
      //console.log(res)
      alert("Post Submitted!");
      setImagePreview(null);
      setCaption("");
      navigate("/feed");
    });
  };

  return (
    <div className="create-post-container">
      <section className="create-post-section">
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
          {/* Custom File Upload Box */}
          <div className="upload-zone">
            <input
              type="file"
              name="image"
              id="file-upload"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label htmlFor="file-upload" className="upload-label">
              {imagePreview ? (
                <div className="preview-container">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="image-preview"
                  />
                  <span className="change-image-badge">Change Image</span>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <div className="upload-icon">📸</div>
                  <span>Click or Drag to Upload Image</span>
                </div>
              )}
            </label>
          </div>

          {/* Caption Input */}
          <div className="input-group">
            <input
              type="text"
              name="caption"
              value={caption}
              onChange={handleCaptionChange}
              placeholder="Write a catchy caption..."
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Publish Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreatePost;
