/** @constructor */
ScalaJS.c.scala_runtime_Tuple3Zipped = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.colls$1 = null
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.constructor = ScalaJS.c.scala_runtime_Tuple3Zipped;
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.colls__Lscala_Tuple3 = (function() {
  return this.colls$1
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.map__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__O = (function(f, cbf) {
  return ScalaJS.modules.scala_runtime_Tuple3Zipped().map$extension__Lscala_Tuple3__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__O(this.colls__Lscala_Tuple3(), f, cbf)
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.flatMap__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__O = (function(f, cbf) {
  return ScalaJS.modules.scala_runtime_Tuple3Zipped().flatMap$extension__Lscala_Tuple3__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__O(this.colls__Lscala_Tuple3(), f, cbf)
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.filter__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_Tuple3 = (function(f, cbf1, cbf2, cbf3) {
  return ScalaJS.modules.scala_runtime_Tuple3Zipped().filter$extension__Lscala_Tuple3__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_Tuple3(this.colls__Lscala_Tuple3(), f, cbf1, cbf2, cbf3)
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.exists__Lscala_Function3__Z = (function(f) {
  return ScalaJS.modules.scala_runtime_Tuple3Zipped().exists$extension__Lscala_Tuple3__Lscala_Function3__Z(this.colls__Lscala_Tuple3(), f)
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.forall__Lscala_Function3__Z = (function(f) {
  return ScalaJS.modules.scala_runtime_Tuple3Zipped().forall$extension__Lscala_Tuple3__Lscala_Function3__Z(this.colls__Lscala_Tuple3(), f)
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.foreach__Lscala_Function3__V = (function(f) {
  ScalaJS.modules.scala_runtime_Tuple3Zipped().foreach$extension__Lscala_Tuple3__Lscala_Function3__V(this.colls__Lscala_Tuple3(), f)
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_Tuple3Zipped().hashCode$extension__Lscala_Tuple3__I(this.colls__Lscala_Tuple3())
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.equals__O__Z = (function(x$1) {
  return ScalaJS.modules.scala_runtime_Tuple3Zipped().equals$extension__Lscala_Tuple3__O__Z(this.colls__Lscala_Tuple3(), x$1)
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.init___Lscala_Tuple3 = (function(colls) {
  this.colls$1 = colls;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.foreach__Lscala_Function3__ = (function(f) {
  return ScalaJS.bV(this.foreach__Lscala_Function3__V(f))
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.forall__Lscala_Function3__ = (function(f$2) {
  return ScalaJS.bZ(this.forall__Lscala_Function3__Z(f$2))
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.exists__Lscala_Function3__ = (function(f$3) {
  return ScalaJS.bZ(this.exists__Lscala_Function3__Z(f$3))
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.filter__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__ = (function(f$4, cbf1, cbf2, cbf3) {
  return this.filter__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_Tuple3(f$4, cbf1, cbf2, cbf3)
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.flatMap__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__ = (function(f$5, cbf) {
  return this.flatMap__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__O(f$5, cbf)
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.map__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__ = (function(f$6, cbf$2) {
  return this.map__Lscala_Function3__Lscala_collection_generic_CanBuildFrom__O(f$6, cbf$2)
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.colls__ = (function() {
  return this.colls__Lscala_Tuple3()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_Tuple3Zipped = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_Tuple3Zipped.prototype = ScalaJS.c.scala_runtime_Tuple3Zipped.prototype;
ScalaJS.is.scala_runtime_Tuple3Zipped = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_Tuple3Zipped)))
});
ScalaJS.as.scala_runtime_Tuple3Zipped = (function(obj) {
  if ((ScalaJS.is.scala_runtime_Tuple3Zipped(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.Tuple3Zipped")
  }
});
ScalaJS.isArrayOf.scala_runtime_Tuple3Zipped = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_Tuple3Zipped)))
});
ScalaJS.asArrayOf.scala_runtime_Tuple3Zipped = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_Tuple3Zipped(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.Tuple3Zipped;", depth)
  }
});
ScalaJS.data.scala_runtime_Tuple3Zipped = new ScalaJS.ClassTypeData({
  scala_runtime_Tuple3Zipped: 0
}, false, "scala.runtime.Tuple3Zipped", ScalaJS.data.java_lang_Object, {
  scala_runtime_Tuple3Zipped: 1,
  scala_runtime_ZippedTraversable3: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_Tuple3Zipped.prototype.$classData = ScalaJS.data.scala_runtime_Tuple3Zipped;
//@ sourceMappingURL=Tuple3Zipped.js.map
