/** @constructor */
ScalaJS.c.scala_collection_generic_BitOperations$Int$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.constructor = ScalaJS.c.scala_collection_generic_BitOperations$Int$;
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.zero__I__I__Z = (function(i, mask) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__zero__Lscala_collection_generic_BitOperations$Int__I__I__Z(this, i, mask)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.mask__I__I__I = (function(i, mask) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__mask__Lscala_collection_generic_BitOperations$Int__I__I__I(this, i, mask)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.hasMatch__I__I__I__Z = (function(key, prefix, m) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__hasMatch__Lscala_collection_generic_BitOperations$Int__I__I__I__Z(this, key, prefix, m)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.unsignedCompare__I__I__Z = (function(i, j) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__unsignedCompare__Lscala_collection_generic_BitOperations$Int__I__I__Z(this, i, j)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.shorter__I__I__Z = (function(m1, m2) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__shorter__Lscala_collection_generic_BitOperations$Int__I__I__Z(this, m1, m2)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.complement__I__I = (function(i) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__complement__Lscala_collection_generic_BitOperations$Int__I__I(this, i)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.bits__I__Lscala_collection_immutable_IndexedSeq = (function(num) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bits__Lscala_collection_generic_BitOperations$Int__I__Lscala_collection_immutable_IndexedSeq(this, num)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.bitString__I__T__T = (function(num, sep) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bitString__Lscala_collection_generic_BitOperations$Int__I__T__T(this, num, sep)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.highestOneBit__I__I = (function(j) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__highestOneBit__Lscala_collection_generic_BitOperations$Int__I__I(this, j)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.bitString$default$2__T = (function() {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bitString$default$2__Lscala_collection_generic_BitOperations$Int__T(this)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_generic_BitOperations$Int = this;
  ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__$init$__Lscala_collection_generic_BitOperations$Int__V(this);
  return this
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.highestOneBit__I__ = (function(j) {
  return ScalaJS.bI(this.highestOneBit__I__I(j))
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.bitString__I__T__ = (function(num, sep) {
  return this.bitString__I__T__T(num, sep)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.bits__I__ = (function(num$2) {
  return this.bits__I__Lscala_collection_immutable_IndexedSeq(num$2)
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.complement__I__ = (function(i) {
  return ScalaJS.bI(this.complement__I__I(i))
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.shorter__I__I__ = (function(m1, m2) {
  return ScalaJS.bZ(this.shorter__I__I__Z(m1, m2))
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.unsignedCompare__I__I__ = (function(i$2, j$2) {
  return ScalaJS.bZ(this.unsignedCompare__I__I__Z(i$2, j$2))
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.hasMatch__I__I__I__ = (function(key, prefix, m) {
  return ScalaJS.bZ(this.hasMatch__I__I__I__Z(key, prefix, m))
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.mask__I__I__ = (function(i$3, mask) {
  return ScalaJS.bI(this.mask__I__I__I(i$3, mask))
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.zero__I__I__ = (function(i$4, mask$2) {
  return ScalaJS.bZ(this.zero__I__I__Z(i$4, mask$2))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_BitOperations$Int$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_BitOperations$Int$.prototype = ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype;
ScalaJS.is.scala_collection_generic_BitOperations$Int$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_BitOperations$Int$)))
});
ScalaJS.as.scala_collection_generic_BitOperations$Int$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_BitOperations$Int$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.BitOperations$Int")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_BitOperations$Int$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_BitOperations$Int$)))
});
ScalaJS.asArrayOf.scala_collection_generic_BitOperations$Int$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_BitOperations$Int$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.BitOperations$Int;", depth)
  }
});
ScalaJS.data.scala_collection_generic_BitOperations$Int$ = new ScalaJS.ClassTypeData({
  scala_collection_generic_BitOperations$Int$: 0
}, false, "scala.collection.generic.BitOperations$Int$", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_BitOperations$Int$: 1,
  scala_collection_generic_BitOperations$Int: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_BitOperations$Int$.prototype.$classData = ScalaJS.data.scala_collection_generic_BitOperations$Int$;
ScalaJS.moduleInstances.scala_collection_generic_BitOperations$Int = undefined;
ScalaJS.modules.scala_collection_generic_BitOperations$Int = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_generic_BitOperations$Int)) {
    ScalaJS.moduleInstances.scala_collection_generic_BitOperations$Int = new ScalaJS.c.scala_collection_generic_BitOperations$Int$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_generic_BitOperations$Int
});
//@ sourceMappingURL=BitOperations$Int$.js.map
