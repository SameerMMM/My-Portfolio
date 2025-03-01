import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Row className="resume">
                    <div>
                        <iframe
                            src="/SameerCV(Webapp).pdf"
                            width="100%"
                            height="800px"
                            title="CV Preview"
                        />
                    </div>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href="/SameerCV(Webapp).pdf"
                        download="SameerCV.pdf"
                        target="_blank"
                        className="download-button"
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;
