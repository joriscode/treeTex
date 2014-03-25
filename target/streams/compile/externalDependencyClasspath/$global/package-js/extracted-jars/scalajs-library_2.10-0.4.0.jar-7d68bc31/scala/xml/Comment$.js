/** @constructor */
ScalaJS.c.scala_xml_Comment$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_xml_Comment$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_xml_Comment$.prototype.constructor = ScalaJS.c.scala_xml_Comment$;
ScalaJS.c.scala_xml_Comment$.prototype.toString__T = (function() {
  return "Comment"
});
ScalaJS.c.scala_xml_Comment$.prototype.apply__T__Lscala_xml_Comment = (function(commentText) {
  return new ScalaJS.c.scala_xml_Comment().init___T(commentText)
});
ScalaJS.c.scala_xml_Comment$.prototype.unapply__Lscala_xml_Comment__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.commentText__T())
  }
});
ScalaJS.c.scala_xml_Comment$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_Comment()
});
ScalaJS.c.scala_xml_Comment$.prototype.apply__O__O = (function(v1) {
  return this.apply__T__Lscala_xml_Comment(ScalaJS.as.java_lang_String(v1))
});
ScalaJS.c.scala_xml_Comment$.prototype.unapply__Lscala_xml_Comment__ = (function(x$0) {
  return this.unapply__Lscala_xml_Comment__Lscala_Option(x$0)
});
ScalaJS.c.scala_xml_Comment$.prototype.apply__T__ = (function(commentText) {
  return this.apply__T__Lscala_xml_Comment(commentText)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Comment$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Comment$.prototype = ScalaJS.c.scala_xml_Comment$.prototype;
ScalaJS.is.scala_xml_Comment$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Comment$)))
});
ScalaJS.as.scala_xml_Comment$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Comment$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Comment")
  }
});
ScalaJS.isArrayOf.scala_xml_Comment$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Comment$)))
});
ScalaJS.asArrayOf.scala_xml_Comment$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Comment$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Comment;", depth)
  }
});
ScalaJS.data.scala_xml_Comment$ = new ScalaJS.ClassTypeData({
  scala_xml_Comment$: 0
}, false, "scala.xml.Comment$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_xml_Comment$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Comment$.prototype.$classData = ScalaJS.data.scala_xml_Comment$;
ScalaJS.moduleInstances.scala_xml_Comment = undefined;
ScalaJS.modules.scala_xml_Comment = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Comment)) {
    ScalaJS.moduleInstances.scala_xml_Comment = new ScalaJS.c.scala_xml_Comment$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Comment
});
//@ sourceMappingURL=Comment$.js.map
