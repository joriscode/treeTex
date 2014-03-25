/** @constructor */
ScalaJS.c.scala_xml_Equality$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_Equality$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_Equality$.prototype.constructor = ScalaJS.c.scala_xml_Equality$;
ScalaJS.c.scala_xml_Equality$.prototype.asRef__O__O = (function(x) {
  return x
});
ScalaJS.c.scala_xml_Equality$.prototype.compareBlithely__O__T__Z = (function(x1, x2) {
  var x1$2 = x1;
  if (ScalaJS.is.scala_xml_Atom(x1$2)) {
    var x2$2 = ScalaJS.as.scala_xml_Atom(x1$2);
    return ScalaJS.anyRefEqEq(x2$2.data__O(), x2)
  };
  if (ScalaJS.is.scala_xml_NodeSeq(x1$2)) {
    var x3 = ScalaJS.as.scala_xml_NodeSeq(x1$2);
    return ScalaJS.anyRefEqEq(x3.text__T(), x2)
  };
  return false
});
ScalaJS.c.scala_xml_Equality$.prototype.compareBlithely__O__Lscala_xml_Node__Z = (function(x1, x2) {
  var x1$2 = x1;
  if (ScalaJS.is.scala_xml_NodeSeq(x1$2)) {
    var x2$2 = ScalaJS.as.scala_xml_NodeSeq(x1$2);
    if ((x2$2.length__I() === 1)) {
      return ScalaJS.anyRefEqEq(x2, x2$2.apply__I__Lscala_xml_Node(0))
    }
  };
  return false
});
ScalaJS.c.scala_xml_Equality$.prototype.compareBlithely__O__O__Z = (function(x1, x2) {
  if ((ScalaJS.anyRefEqEq(x1, null) || ScalaJS.anyRefEqEq(x2, null))) {
    return (x1 === x2)
  };
  var x1$2 = x2;
  if (ScalaJS.is.java_lang_String(x1$2)) {
    var x2$2 = ScalaJS.as.java_lang_String(x1$2);
    return this.compareBlithely__O__T__Z(x1, x2$2)
  };
  if (ScalaJS.is.scala_xml_Node(x1$2)) {
    var x3 = ScalaJS.as.scala_xml_Node(x1$2);
    return this.compareBlithely__O__Lscala_xml_Node__Z(x1, x3)
  };
  return false
});
ScalaJS.c.scala_xml_Equality$.prototype.compareBlithely__O__O__ = (function(x1, x2) {
  return ScalaJS.bZ(this.compareBlithely__O__O__Z(x1, x2))
});
ScalaJS.c.scala_xml_Equality$.prototype.compareBlithely__O__Lscala_xml_Node__ = (function(x1$2, x2$2) {
  return ScalaJS.bZ(this.compareBlithely__O__Lscala_xml_Node__Z(x1$2, x2$2))
});
ScalaJS.c.scala_xml_Equality$.prototype.compareBlithely__O__T__ = (function(x1$3, x2$3) {
  return ScalaJS.bZ(this.compareBlithely__O__T__Z(x1$3, x2$3))
});
ScalaJS.c.scala_xml_Equality$.prototype.asRef__O__ = (function(x) {
  return this.asRef__O__O(x)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Equality$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Equality$.prototype = ScalaJS.c.scala_xml_Equality$.prototype;
ScalaJS.is.scala_xml_Equality$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Equality$)))
});
ScalaJS.as.scala_xml_Equality$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Equality$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Equality")
  }
});
ScalaJS.isArrayOf.scala_xml_Equality$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Equality$)))
});
ScalaJS.asArrayOf.scala_xml_Equality$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Equality$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Equality;", depth)
  }
});
ScalaJS.data.scala_xml_Equality$ = new ScalaJS.ClassTypeData({
  scala_xml_Equality$: 0
}, false, "scala.xml.Equality$", ScalaJS.data.java_lang_Object, {
  scala_xml_Equality$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Equality$.prototype.$classData = ScalaJS.data.scala_xml_Equality$;
ScalaJS.moduleInstances.scala_xml_Equality = undefined;
ScalaJS.modules.scala_xml_Equality = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Equality)) {
    ScalaJS.moduleInstances.scala_xml_Equality = new ScalaJS.c.scala_xml_Equality$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Equality
});
//@ sourceMappingURL=Equality$.js.map
