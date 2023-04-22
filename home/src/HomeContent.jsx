import React, { useState, useEffect } from "react";

import ShareContent from 'child1/ShareContent'

export default function HomeContent() {

  useEffect(() => {
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
        Home content  <ShareContent />
    </div>
  );
}
