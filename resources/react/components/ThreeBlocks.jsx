import React from "react";

function ThreeBlocks({ blocks, classes }) {
    return (
        <div className={`container ${classes}`}>
            <div className="ThreeBlocks container text-center py-5 my-5">
                <p className="mb4p5 fs-4">We 're here to deliver</p>
                <div className="row">
                    {blocks.map((block, index) => (
                        <div key={index} className="col-md-4">
                            <img
                                src={block.iconPath}
                                className="ThreeBlocksIcon"
                                alt="Icon"
                            />
                            <p className="ThreeBlockstitle">{block.title}</p>
                            <p className="ThreeBlockssubTitle">
                                {block.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ThreeBlocks;
