<?xml version="1.0" encoding="UTF-8"?>


<!-- This file is part of the book                 -->
<!--                                               -->
<!--   Discrete Mathematics: an Open Introduction  -->
<!--                                               -->
<!-- Copyright (C) 2015-2018 Oscar Levin           -->
<!-- See the file COPYING for copying conditions.  -->

<!-- Parts of this file were adapted from the author guide at https://github.com/rbeezer/mathbook and the analagous file at https://github.com/twjudson/aata -->
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "entities.ent">
    %entities;
]>

<!--HTML runs -->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<!-- Assumes current file is in mathbook/user -->
<xsl:import href="./core/pretext-html.xsl" />

<!-- Change every #slide to #subsection -->
 <xsl:template match="slideshow" mode="assembly">
    <article>
        <xsl:apply-templates select="@*|node()" mode="assembly" />>
    </article>
 </xsl:template>

 <xsl:template match="slide" mode="assembly">
    <subsection>
        <xsl:apply-templates select="@*|node()" mode="assembly" />>
    </subsection>
 </xsl:template>

</xsl:stylesheet>
