/** @constructor */
ScalaJS.c.scala_runtime_Tuple2Zipped = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.colls$1 = null
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.constructor = ScalaJS.c.scala_runtime_Tuple2Zipped;
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.colls__Lscala_Tuple2 = (function() {
  return this.colls$1
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.map__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(f, cbf) {
  return ScalaJS.modules.scala_runtime_Tuple2Zipped().map$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this.colls__Lscala_Tuple2(), f, cbf)
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.flatMap__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(f, cbf) {
  return ScalaJS.modules.scala_runtime_Tuple2Zipped().flatMap$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this.colls__Lscala_Tuple2(), f, cbf)
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.filter__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_Tuple2 = (function(f, cbf1, cbf2) {
  return ScalaJS.modules.scala_runtime_Tuple2Zipped().filter$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_Tuple2(this.colls__Lscala_Tuple2(), f, cbf1, cbf2)
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.exists__Lscala_Function2__Z = (function(f) {
  return ScalaJS.modules.scala_runtime_Tuple2Zipped().exists$extension__Lscala_Tuple2__Lscala_Function2__Z(this.colls__Lscala_Tuple2(), f)
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.forall__Lscala_Function2__Z = (function(f) {
  return ScalaJS.modules.scala_runtime_Tuple2Zipped().forall$extension__Lscala_Tuple2__Lscala_Function2__Z(this.colls__Lscala_Tuple2(), f)
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.foreach__Lscala_Function2__V = (function(f) {
  ScalaJS.modules.scala_runtime_Tuple2Zipped().foreach$extension__Lscala_Tuple2__Lscala_Function2__V(this.colls__Lscala_Tuple2(), f)
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_Tuple2Zipped().hashCode$extension__Lscala_Tuple2__I(this.colls__Lscala_Tuple2())
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.equals__O__Z = (function(x$1) {
  return ScalaJS.modules.scala_runtime_Tuple2Zipped().equals$extension__Lscala_Tuple2__O__Z(this.colls__Lscala_Tuple2(), x$1)
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.init___Lscala_Tuple2 = (function(colls) {
  this.colls$1 = colls;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.foreach__Lscala_Function2__ = (function(f) {
  return ScalaJS.bV(this.foreach__Lscala_Function2__V(f))
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.forall__Lscala_Function2__ = (function(f$2) {
  return ScalaJS.bZ(this.forall__Lscala_Function2__Z(f$2))
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.exists__Lscala_Function2__ = (function(f$3) {
  return ScalaJS.bZ(this.exists__Lscala_Function2__Z(f$3))
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.filter__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__ = (function(f$4, cbf1, cbf2) {
  return this.filter__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_Tuple2(f$4, cbf1, cbf2)
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.flatMap__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(f$5, cbf) {
  return this.flatMap__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(f$5, cbf)
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.map__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(f$6, cbf$2) {
  return this.map__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(f$6, cbf$2)
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.colls__ = (function() {
  return this.colls__Lscala_Tuple2()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_Tuple2Zipped = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_Tuple2Zipped.prototype = ScalaJS.c.scala_runtime_Tuple2Zipped.prototype;
ScalaJS.is.scala_runtime_Tuple2Zipped = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_Tuple2Zipped)))
});
ScalaJS.as.scala_runtime_Tuple2Zipped = (function(obj) {
  if ((ScalaJS.is.scala_runtime_Tuple2Zipped(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.Tuple2Zipped")
  }
});
ScalaJS.isArrayOf.scala_runtime_Tuple2Zipped = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_Tuple2Zipped)))
});
ScalaJS.asArrayOf.scala_runtime_Tuple2Zipped = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_Tuple2Zipped(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.Tuple2Zipped;", depth)
  }
});
ScalaJS.data.scala_runtime_Tuple2Zipped = new ScalaJS.ClassTypeData({
  scala_runtime_Tuple2Zipped: 0
}, false, "scala.runtime.Tuple2Zipped", ScalaJS.data.java_lang_Object, {
  scala_runtime_Tuple2Zipped: 1,
  scala_runtime_ZippedTraversable2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_Tuple2Zipped.prototype.$classData = ScalaJS.data.scala_runtime_Tuple2Zipped;
//@ sourceMappingURL=Tuple2Zipped.js.map
