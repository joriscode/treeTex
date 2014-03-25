/** @constructor */
ScalaJS.c.scala_xml_dtd_EMPTY$ = (function() {
  ScalaJS.c.scala_xml_dtd_ContentModel.call(this)
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype = new ScalaJS.inheritable.scala_xml_dtd_ContentModel();
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.constructor = ScalaJS.c.scala_xml_dtd_EMPTY$;
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return sb.append__T__Lscala_collection_mutable_StringBuilder("EMPTY")
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.productPrefix__T = (function() {
  return "EMPTY"
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_EMPTY$(x$1)
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.hashCode__I = (function() {
  return 66096429
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_EMPTY()
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_dtd_ContentModel.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_dtd_EMPTY = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_EMPTY$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_EMPTY$.prototype = ScalaJS.c.scala_xml_dtd_EMPTY$.prototype;
ScalaJS.is.scala_xml_dtd_EMPTY$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_EMPTY$)))
});
ScalaJS.as.scala_xml_dtd_EMPTY$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_EMPTY$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.EMPTY")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_EMPTY$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_EMPTY$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_EMPTY$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_EMPTY$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.EMPTY;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_EMPTY$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_EMPTY$: 0
}, false, "scala.xml.dtd.EMPTY$", ScalaJS.data.scala_xml_dtd_ContentModel, {
  scala_xml_dtd_EMPTY$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_ContentModel: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_EMPTY$.prototype.$classData = ScalaJS.data.scala_xml_dtd_EMPTY$;
ScalaJS.moduleInstances.scala_xml_dtd_EMPTY = undefined;
ScalaJS.modules.scala_xml_dtd_EMPTY = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_EMPTY)) {
    ScalaJS.moduleInstances.scala_xml_dtd_EMPTY = new ScalaJS.c.scala_xml_dtd_EMPTY$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_EMPTY
});
//@ sourceMappingURL=EMPTY$.js.map
