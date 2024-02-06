import React from "react";
import LC from ".//public/LC.png";
import drag from ".//public/drag.png";
import emb from ".//public/embeddings.png";
import pipe from ".//public/pipe.png";
import scale from ".//public/scale.png";
import sync from ".//public/sync.png";
import "./Section.css";
const Section = () => {
  return (
    <div>
      <div className="heading-h-2-left4">
        <h2>Features of VectrFlow</h2>
      </div>

      <div className="card">

        <div className="card-sm">
          <div className="group-34">
            <div className="rectangle-27">
              <img
                className="heart-rate-perspective-matte"
                src={drag}
                alt="Sync Image"
              />
            </div>
          </div>

          <div className="frame-56">
            <div className="card-main-title">
              Low code drag and drop functionality
            </div>
            <div className="translate-to-code">
              <span className="lcode">
                Low code drag and drop functionality is a user-friendly
                development approach that simplifies application creation. It
                employs a visual interface where users can easily design and
                build elements by drag and drop components onto a canvas. This
                approach reduces the need for extensive coding, making it
                accessible to non-developers.
              </span>
            </div>
          </div>
        </div>

        <div className="card-sm">
          <div className="group-34">
            <div className="rectangle-27">
              <img
                className="heart-rate-perspective-matte"
                src={pipe}
                alt="Sync Image"
              />
            </div>
          </div>

          <div className="frame-56">
            <div className="card-main-title">
            Automated Data Ingestion Pipeline
          
            </div>
            <div className="translate-to-code">
              <span className="lcode">
              An Automated Data Ingestion Pipeline is a structured data
                    workflow that efficiently collects, transforms, and loads
                    data from various sources into a central repository or data
                    warehouse. This pipeline automates the often complex and
                    time-consuming process of data acquisition, ensuring data
                    quality and consistency.
       
              </span>
            </div>
          </div>
        </div>

        <div className="card-sm card-sm3">
          <div className="group-34">
            <div className="rectangle-27">
              <img
                className="heart-rate-perspective-matte"
                src={sync}
                alt="Sync Image"
              />
            </div>
          </div>

          <div className="frame-56">
            <div className="card-main-title">
            Vectorstore and computed Embeddings
            
            </div>
            <div className="translate-to-code">
              <span className="lcode">
              "Vectorstore" refers to a repository or database that stores
                    vector representations of data points or entities. Computed
                    embeddings, in this context, are vectors generated through
                    techniques like word embeddings (e.g., Word2Vec or GloVe) or
                    deep learning models.
              </span>
            </div>
          </div>
        </div>

        <div className="card-sm">
          <div className="group-34">
            <div className="rectangle-27">
              <img
                className="heart-rate-perspective-matte"
                src={emb}
                alt="Sync Image"
              />
            </div>
          </div>

          <div className="frame-56">
            <div className="card-main-title">
            Scalable data Pipeline
            </div>
            <div className="translate-to-code">
              <span className="lcode">
              A scalable data pipeline is a sophisticated architecture
                    that can efficiently process, transform, and transmit large
                    volumes of data. It's designed to adapt to growing data
                    needs, ensuring seamless performance and accommodating
                    increasing data volumes, making it ideal for organizations
                    with dynamic data requirements.
               
              </span>
            </div>
          </div>
        </div>

        <div className="card-sm card-sm6">
          <div className="group-34">
            <div className="rectangle-27">
              <img
                className="heart-rate-perspective-matte"
                src={LC}
                alt="Sync Image"
              />
            </div>
          </div>

          <div className="frame-56">
            <div className="card-main-title">
            Streamline Langchain and LlamaIndex development
            </div>
            <div className="translate-to-code">
              <span className="lcode">
              To streamline Langchain and LlamaIndex development,
                    prioritize clear project roadmaps and agile methodologies,
                    enhance cross-team collaboration and communication, and
                    leverage modular, reusable code components for efficient
                    coding and testing, ultimately accelerating the development
                    process and improving product quality.
                
              </span>
            </div>
          </div>
        </div>

        <div className="card-sm">
          <div className="group-34">
            <div className="rectangle-27">
              <img
                className="heart-rate-perspective-matte"
                src={scale}
                alt="Sync Image"
              />
            </div>
          </div>

          <div className="frame-56">
            <div className="card-main-title">
            Periodic data Sync and pay as you use
             
            </div>
            <div className="translate-to-code">
              <span className="lcode">
              Periodic data sync refers to the scheduled and automatic
                    updating of information between systems or databases at
                    regular intervals, ensuring data consistency and accuracy.
                    "Pay as you use" implies a pricing model where customers are
                    billed based on the actual resources or services they
                    consume, promoting cost efficiency and scalability.
             
              </span>
            </div>
          </div>
        </div>


        {/* <div className="card-sm2">
          <div className="rectangle-21"></div>
          <div className="frame-57">
            <div className="group-34">
              <div className="rectangle-272"></div>
            </div>
            <div className="frame-56">
              <div className="card-main-title">
                Automated Data Ingestion Pipeline
              </div>
              <div className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
                <span>
                  <span className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span4">
                    An Automated Data Ingestion Pipeline is a structured data
                    workflow that efficiently collects, transforms, and loads
                    data from various sources into a central repository or data
                    warehouse. This pipeline automates the often complex and
                    time-consuming process of data acquisition, ensuring data
                    quality and consistency.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-sm3">
          <div className="rectangle-21"></div>
          <div className="frame-57">
            <div className="group-34">
              <div className="rectangle-273"></div>
            </div>
            <div className="frame-56">
              <div className="card-main-title">
                Vectorstore and computed Embeddings
              </div>
              <div className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
                <span>
                  <span className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span7">
                    "Vectorstore" refers to a repository or database that stores
                    vector representations of data points or entities. Computed
                    embeddings, in this context, are vectors generated through
                    techniques like word embeddings (e.g., Word2Vec or GloVe) or
                    deep learning models.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-sm4">
          <div className="rectangle-21"></div>
          <div className="frame-57">
            <div className="group-34">
              <div className="rectangle-274"></div>
            </div>
            <div className="frame-56">
              <div className="card-main-title">Scalable data Pipeline</div>
              <div className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
                <span>
                  <span className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span10">
                    A scalable data pipeline is a sophisticated architecture
                    that can efficiently process, transform, and transmit large
                    volumes of data. It's designed to adapt to growing data
                    needs, ensuring seamless performance and accommodating
                    increasing data volumes, making it ideal for organizations
                    with dynamic data requirements.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-sm5">
          <div className="rectangle-21"></div>
          <div className="frame-57">
            <div className="group-34">
              <div className="rectangle-275"></div>
            </div>
            <div className="frame-56">
              <div className="card-main-title">
                Streamline Langchain and LlamaIndex development
              </div>
              <div className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
                <span>
                  <span className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span13">
                    To streamline Langchain and LlamaIndex development,
                    prioritize clear project roadmaps and agile methodologies,
                    enhance cross-team collaboration and communication, and
                    leverage modular, reusable code components for efficient
                    coding and testing, ultimately accelerating the development
                    process and improving product quality.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-sm6">
          <div className="rectangle-21"></div>
          <div className="frame-57">
            <div className="group-34">
              <div className="rectangle-275"></div>
            </div>
            <div className="frame-56">
              <div className="card-main-title">
                Periodic data Sync and pay as you use
              </div>
              <div className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
                <span>
                  <span className="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span16">
                    Periodic data sync refers to the scheduled and automatic
                    updating of information between systems or databases at
                    regular intervals, ensuring data consistency and accuracy.
                    "Pay as you use" implies a pricing model where customers are
                    billed based on the actual resources or services they
                    consume, promoting cost efficiency and scalability.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>  */}
      </div>
    </div>
  );
};
export default Section;
