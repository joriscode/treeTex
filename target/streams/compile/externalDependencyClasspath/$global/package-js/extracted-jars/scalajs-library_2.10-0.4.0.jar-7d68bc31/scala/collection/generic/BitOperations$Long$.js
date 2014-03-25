/** @constructor */
ScalaJS.c.scala_collection_generic_BitOperations$Long$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.constructor = ScalaJS.c.scala_collection_generic_BitOperations$Long$;
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.zero__J__J__Z = (function(i$5, mask$3) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__zero__Lscala_collection_generic_BitOperations$Long__J__J__Z(this, i$5, mask$3)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.mask__J__J__J = (function(i, mask) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__mask__Lscala_collection_generic_BitOperations$Long__J__J__J(this, i, mask)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.hasMatch__J__J__J__Z = (function(key, prefix, m) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__hasMatch__Lscala_collection_generic_BitOperations$Long__J__J__J__Z(this, key, prefix, m)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.unsignedCompare__J__J__Z = (function(i, j) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__unsignedCompare__Lscala_collection_generic_BitOperations$Long__J__J__Z(this, i, j)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.shorter__J__J__Z = (function(m1, m2) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__shorter__Lscala_collection_generic_BitOperations$Long__J__J__Z(this, m1, m2)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.complement__J__J = (function(i) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__complement__Lscala_collection_generic_BitOperations$Long__J__J(this, i)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.bits__J__Lscala_collection_immutable_IndexedSeq = (function(num) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__bits__Lscala_collection_generic_BitOperations$Long__J__Lscala_collection_immutable_IndexedSeq(this, num)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.bitString__J__T__T = (function(num, sep) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__bitString__Lscala_collection_generic_BitOperations$Long__J__T__T(this, num, sep)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.highestOneBit__J__J = (function(j) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__highestOneBit__Lscala_collection_generic_BitOperations$Long__J__J(this, j)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.bitString$default$2__T = (function() {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__bitString$default$2__Lscala_collection_generic_BitOperations$Long__T(this)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_generic_BitOperations$Long = this;
  ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__$init$__Lscala_collection_generic_BitOperations$Long__V(this);
  return this
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.highestOneBit__J__ = (function(j) {
  return ScalaJS.bJ(this.highestOneBit__J__J(j))
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.bitString__J__T__ = (function(num, sep) {
  return this.bitString__J__T__T(num, sep)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.bits__J__ = (function(num$2) {
  return this.bits__J__Lscala_collection_immutable_IndexedSeq(num$2)
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.complement__J__ = (function(i) {
  return ScalaJS.bJ(this.complement__J__J(i))
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.shorter__J__J__ = (function(m1, m2) {
  return ScalaJS.bZ(this.shorter__J__J__Z(m1, m2))
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.unsignedCompare__J__J__ = (function(i$2, j$2) {
  return ScalaJS.bZ(this.unsignedCompare__J__J__Z(i$2, j$2))
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.hasMatch__J__J__J__ = (function(key, prefix, m) {
  return ScalaJS.bZ(this.hasMatch__J__J__J__Z(key, prefix, m))
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.mask__J__J__ = (function(i$3, mask) {
  return ScalaJS.bJ(this.mask__J__J__J(i$3, mask))
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.zero__J__J__ = (function(i$4, mask$2) {
  return ScalaJS.bZ(this.zero__J__J__Z(i$4, mask$2))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_BitOperations$Long$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_BitOperations$Long$.prototype = ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype;
ScalaJS.is.scala_collection_generic_BitOperations$Long$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_BitOperations$Long$)))
});
ScalaJS.as.scala_collection_generic_BitOperations$Long$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_BitOperations$Long$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.BitOperations$Long")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_BitOperations$Long$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_BitOperations$Long$)))
});
ScalaJS.asArrayOf.scala_collection_generic_BitOperations$Long$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_BitOperations$Long$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.BitOperations$Long;", depth)
  }
});
ScalaJS.data.scala_collection_generic_BitOperations$Long$ = new ScalaJS.ClassTypeData({
  scala_collection_generic_BitOperations$Long$: 0
}, false, "scala.collection.generic.BitOperations$Long$", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_BitOperations$Long$: 1,
  scala_collection_generic_BitOperations$Long: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_BitOperations$Long$.prototype.$classData = ScalaJS.data.scala_collection_generic_BitOperations$Long$;
ScalaJS.moduleInstances.scala_collection_generic_BitOperations$Long = undefined;
ScalaJS.modules.scala_collection_generic_BitOperations$Long = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_generic_BitOperations$Long)) {
    ScalaJS.moduleInstances.scala_collection_generic_BitOperations$Long = new ScalaJS.c.scala_collection_generic_BitOperations$Long$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_generic_BitOperations$Long
});
//@ sourceMappingURL=BitOperations$Long$.js.map
