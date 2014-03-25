/** @constructor */
ScalaJS.c.scala_xml_dtd_DTD = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.externalID$1 = null;
  this.decls$1 = null;
  this.elem$1 = null;
  this.attr$1 = null;
  this.ent$1 = null
});
ScalaJS.c.scala_xml_dtd_DTD.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_dtd_DTD.prototype.constructor = ScalaJS.c.scala_xml_dtd_DTD;
ScalaJS.c.scala_xml_dtd_DTD.prototype.externalID__Lscala_xml_dtd_ExternalID = (function() {
  return this.externalID$1
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.externalID$und$eq__Lscala_xml_dtd_ExternalID__V = (function(x$1) {
  this.externalID$1 = x$1
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.decls__Lscala_collection_immutable_List = (function() {
  return this.decls$1
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.decls$und$eq__Lscala_collection_immutable_List__V = (function(x$1) {
  this.decls$1 = x$1
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.notations__Lscala_collection_Seq = (function() {
  return ScalaJS.modules.scala_collection_immutable_Nil()
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.unparsedEntities__Lscala_collection_Seq = (function() {
  return ScalaJS.modules.scala_collection_immutable_Nil()
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.elem__Lscala_collection_mutable_Map = (function() {
  return this.elem$1
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.elem$und$eq__Lscala_collection_mutable_Map__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.attr__Lscala_collection_mutable_Map = (function() {
  return this.attr$1
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.attr$und$eq__Lscala_collection_mutable_Map__V = (function(x$1) {
  this.attr$1 = x$1
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.ent__Lscala_collection_mutable_Map = (function() {
  return this.ent$1
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.ent$und$eq__Lscala_collection_mutable_Map__V = (function(x$1) {
  this.ent$1 = x$1
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.toString__T = (function() {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("DTD [\n%s%s]")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.modules.scala_Option().apply__O__Lscala_Option(this.externalID__Lscala_xml_dtd_ExternalID()).getOrElse__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return ""
    })
  })())), this.decls__Lscala_collection_immutable_List().mkString__T__T__T__T("", "\n", "\n")])))
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.externalID$1 = null;
  this.decls$1 = ScalaJS.modules.scala_collection_immutable_Nil();
  this.elem$1 = new ScalaJS.c.scala_collection_mutable_HashMap().init___();
  this.attr$1 = new ScalaJS.c.scala_collection_mutable_HashMap().init___();
  this.ent$1 = new ScalaJS.c.scala_collection_mutable_HashMap().init___();
  return this
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.ent$und$eq__Lscala_collection_mutable_Map__ = (function(x$1) {
  return ScalaJS.bV(this.ent$und$eq__Lscala_collection_mutable_Map__V(x$1))
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.ent__ = (function() {
  return this.ent__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.attr$und$eq__Lscala_collection_mutable_Map__ = (function(x$1$2) {
  return ScalaJS.bV(this.attr$und$eq__Lscala_collection_mutable_Map__V(x$1$2))
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.attr__ = (function() {
  return this.attr__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.elem$und$eq__Lscala_collection_mutable_Map__ = (function(x$1$3) {
  return ScalaJS.bV(this.elem$und$eq__Lscala_collection_mutable_Map__V(x$1$3))
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.elem__ = (function() {
  return this.elem__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.unparsedEntities__ = (function() {
  return this.unparsedEntities__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.notations__ = (function() {
  return this.notations__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.decls$und$eq__Lscala_collection_immutable_List__ = (function(x$1$4) {
  return ScalaJS.bV(this.decls$und$eq__Lscala_collection_immutable_List__V(x$1$4))
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.decls__ = (function() {
  return this.decls__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.externalID$und$eq__Lscala_xml_dtd_ExternalID__ = (function(x$1$5) {
  return ScalaJS.bV(this.externalID$und$eq__Lscala_xml_dtd_ExternalID__V(x$1$5))
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.externalID__ = (function() {
  return this.externalID__Lscala_xml_dtd_ExternalID()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_DTD = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_DTD.prototype = ScalaJS.c.scala_xml_dtd_DTD.prototype;
ScalaJS.is.scala_xml_dtd_DTD = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_DTD)))
});
ScalaJS.as.scala_xml_dtd_DTD = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_DTD(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.DTD")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_DTD = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_DTD)))
});
ScalaJS.asArrayOf.scala_xml_dtd_DTD = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_DTD(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.DTD;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_DTD = new ScalaJS.ClassTypeData({
  scala_xml_dtd_DTD: 0
}, false, "scala.xml.dtd.DTD", ScalaJS.data.java_lang_Object, {
  scala_xml_dtd_DTD: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_DTD.prototype.$classData = ScalaJS.data.scala_xml_dtd_DTD;
//@ sourceMappingURL=DTD.js.map
