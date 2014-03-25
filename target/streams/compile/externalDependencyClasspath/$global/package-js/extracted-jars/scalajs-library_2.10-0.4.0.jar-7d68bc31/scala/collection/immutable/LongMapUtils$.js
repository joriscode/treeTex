/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMapUtils$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMapUtils$;
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.zero__J__J__Z = (function(i, mask) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__zero__Lscala_collection_generic_BitOperations$Long__J__J__Z(this, i, mask)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.mask__J__J__J = (function(i, mask) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__mask__Lscala_collection_generic_BitOperations$Long__J__J__J(this, i, mask)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.hasMatch__J__J__J__Z = (function(key, prefix, m) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__hasMatch__Lscala_collection_generic_BitOperations$Long__J__J__J__Z(this, key, prefix, m)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.unsignedCompare__J__J__Z = (function(i, j) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__unsignedCompare__Lscala_collection_generic_BitOperations$Long__J__J__Z(this, i, j)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.shorter__J__J__Z = (function(m1, m2) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__shorter__Lscala_collection_generic_BitOperations$Long__J__J__Z(this, m1, m2)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.complement__J__J = (function(i) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__complement__Lscala_collection_generic_BitOperations$Long__J__J(this, i)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.bits__J__Lscala_collection_immutable_IndexedSeq = (function(num) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__bits__Lscala_collection_generic_BitOperations$Long__J__Lscala_collection_immutable_IndexedSeq(this, num)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.bitString__J__T__T = (function(num, sep) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__bitString__Lscala_collection_generic_BitOperations$Long__J__T__T(this, num, sep)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.highestOneBit__J__J = (function(j) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__highestOneBit__Lscala_collection_generic_BitOperations$Long__J__J(this, j)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.bitString$default$2__T = (function() {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__bitString$default$2__Lscala_collection_generic_BitOperations$Long__T(this)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.branchMask__J__J__J = (function(i, j) {
  return this.highestOneBit__J__J(i.$$up__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(j))
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.join__J__Lscala_collection_immutable_LongMap__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap = (function(p1, t1, p2, t2) {
  var m = this.branchMask__J__J__J(p1, p2);
  var p = this.mask__J__J__J(p1, m);
  if (this.zero__J__J__Z(p1, m)) {
    return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p, m, t1, t2)
  } else {
    return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p, m, t2, t1)
  }
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.bin__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap = (function(prefix, mask, left, right) {
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(left, right);
  if ((x1 !== null)) {
    var left$2 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und1__O());
    var p2 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), p2)) {
      return left$2
    }
  };
  if ((x1 !== null)) {
    var p3 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und1__O());
    var right$2 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), p3)) {
      return right$2
    }
  };
  if ((x1 !== null)) {
    var left$3 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und1__O());
    var right$3 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und2__O());
    return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix, mask, left$3, right$3)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_LongMapUtils = this;
  ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__$init$__Lscala_collection_generic_BitOperations$Long__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.highestOneBit__J__ = (function(j) {
  return ScalaJS.bJ(this.highestOneBit__J__J(j))
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.bitString__J__T__ = (function(num, sep) {
  return this.bitString__J__T__T(num, sep)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.bits__J__ = (function(num$2) {
  return this.bits__J__Lscala_collection_immutable_IndexedSeq(num$2)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.complement__J__ = (function(i) {
  return ScalaJS.bJ(this.complement__J__J(i))
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.shorter__J__J__ = (function(m1, m2) {
  return ScalaJS.bZ(this.shorter__J__J__Z(m1, m2))
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.unsignedCompare__J__J__ = (function(i$2, j$2) {
  return ScalaJS.bZ(this.unsignedCompare__J__J__Z(i$2, j$2))
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.hasMatch__J__J__J__ = (function(key, prefix, m) {
  return ScalaJS.bZ(this.hasMatch__J__J__J__Z(key, prefix, m))
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.mask__J__J__ = (function(i$3, mask) {
  return ScalaJS.bJ(this.mask__J__J__J(i$3, mask))
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.zero__J__J__ = (function(i$4, mask$2) {
  return ScalaJS.bZ(this.zero__J__J__Z(i$4, mask$2))
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.bin__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__ = (function(prefix$2, mask$3, left, right) {
  return this.bin__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix$2, mask$3, left, right)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.join__J__Lscala_collection_immutable_LongMap__J__Lscala_collection_immutable_LongMap__ = (function(p1, t1, p2, t2) {
  return this.join__J__Lscala_collection_immutable_LongMap__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p1, t1, p2, t2)
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.branchMask__J__J__ = (function(i$5, j$3) {
  return ScalaJS.bJ(this.branchMask__J__J__J(i$5, j$3))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMapUtils$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMapUtils$.prototype = ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype;
ScalaJS.is.scala_collection_immutable_LongMapUtils$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMapUtils$)))
});
ScalaJS.as.scala_collection_immutable_LongMapUtils$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMapUtils$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMapUtils")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMapUtils$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMapUtils$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMapUtils$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMapUtils$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMapUtils;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMapUtils$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMapUtils$: 0
}, false, "scala.collection.immutable.LongMapUtils$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_LongMapUtils$: 1,
  scala_collection_generic_BitOperations$Long: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_LongMapUtils$.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMapUtils$;
ScalaJS.moduleInstances.scala_collection_immutable_LongMapUtils = undefined;
ScalaJS.modules.scala_collection_immutable_LongMapUtils = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_LongMapUtils)) {
    ScalaJS.moduleInstances.scala_collection_immutable_LongMapUtils = new ScalaJS.c.scala_collection_immutable_LongMapUtils$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_LongMapUtils
});
//@ sourceMappingURL=LongMapUtils$.js.map
