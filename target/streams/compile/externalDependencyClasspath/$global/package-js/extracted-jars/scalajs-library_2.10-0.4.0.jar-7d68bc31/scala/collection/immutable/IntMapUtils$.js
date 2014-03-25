/** @constructor */
ScalaJS.c.scala_collection_immutable_IntMapUtils$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.constructor = ScalaJS.c.scala_collection_immutable_IntMapUtils$;
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.zero__I__I__Z = (function(i, mask) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__zero__Lscala_collection_generic_BitOperations$Int__I__I__Z(this, i, mask)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.mask__I__I__I = (function(i, mask) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__mask__Lscala_collection_generic_BitOperations$Int__I__I__I(this, i, mask)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.hasMatch__I__I__I__Z = (function(key, prefix, m) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__hasMatch__Lscala_collection_generic_BitOperations$Int__I__I__I__Z(this, key, prefix, m)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.unsignedCompare__I__I__Z = (function(i, j) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__unsignedCompare__Lscala_collection_generic_BitOperations$Int__I__I__Z(this, i, j)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.shorter__I__I__Z = (function(m1, m2) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__shorter__Lscala_collection_generic_BitOperations$Int__I__I__Z(this, m1, m2)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.complement__I__I = (function(i) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__complement__Lscala_collection_generic_BitOperations$Int__I__I(this, i)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.bits__I__Lscala_collection_immutable_IndexedSeq = (function(num) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bits__Lscala_collection_generic_BitOperations$Int__I__Lscala_collection_immutable_IndexedSeq(this, num)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.bitString__I__T__T = (function(num, sep) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bitString__Lscala_collection_generic_BitOperations$Int__I__T__T(this, num, sep)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.highestOneBit__I__I = (function(j) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__highestOneBit__Lscala_collection_generic_BitOperations$Int__I__I(this, j)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.bitString$default$2__T = (function() {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bitString$default$2__Lscala_collection_generic_BitOperations$Int__T(this)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.branchMask__I__I__I = (function(i, j) {
  return this.highestOneBit__I__I((i ^ j))
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.join__I__Lscala_collection_immutable_IntMap__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap = (function(p1, t1, p2, t2) {
  var m = this.branchMask__I__I__I(p1, p2);
  var p = this.mask__I__I__I(p1, m);
  if (this.zero__I__I__Z(p1, m)) {
    return new ScalaJS.c.scala_collection_immutable_IntMap$Bin().init___I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap(p, m, t1, t2)
  } else {
    return new ScalaJS.c.scala_collection_immutable_IntMap$Bin().init___I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap(p, m, t2, t1)
  }
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.bin__I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap = (function(prefix, mask, left, right) {
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(left, right);
  if ((x1 !== null)) {
    var left$2 = ScalaJS.as.scala_collection_immutable_IntMap(x1.$$und1__O());
    var p2 = ScalaJS.as.scala_collection_immutable_IntMap(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_IntMap$Nil(), p2)) {
      return left$2
    }
  };
  if ((x1 !== null)) {
    var p3 = ScalaJS.as.scala_collection_immutable_IntMap(x1.$$und1__O());
    var right$2 = ScalaJS.as.scala_collection_immutable_IntMap(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_IntMap$Nil(), p3)) {
      return right$2
    }
  };
  if ((x1 !== null)) {
    var left$3 = ScalaJS.as.scala_collection_immutable_IntMap(x1.$$und1__O());
    var right$3 = ScalaJS.as.scala_collection_immutable_IntMap(x1.$$und2__O());
    return new ScalaJS.c.scala_collection_immutable_IntMap$Bin().init___I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap(prefix, mask, left$3, right$3)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_IntMapUtils = this;
  ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__$init$__Lscala_collection_generic_BitOperations$Int__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.highestOneBit__I__ = (function(j) {
  return ScalaJS.bI(this.highestOneBit__I__I(j))
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.bitString__I__T__ = (function(num, sep) {
  return this.bitString__I__T__T(num, sep)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.bits__I__ = (function(num$2) {
  return this.bits__I__Lscala_collection_immutable_IndexedSeq(num$2)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.complement__I__ = (function(i) {
  return ScalaJS.bI(this.complement__I__I(i))
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.shorter__I__I__ = (function(m1, m2) {
  return ScalaJS.bZ(this.shorter__I__I__Z(m1, m2))
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.unsignedCompare__I__I__ = (function(i$2, j$2) {
  return ScalaJS.bZ(this.unsignedCompare__I__I__Z(i$2, j$2))
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.hasMatch__I__I__I__ = (function(key, prefix, m) {
  return ScalaJS.bZ(this.hasMatch__I__I__I__Z(key, prefix, m))
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.mask__I__I__ = (function(i$3, mask) {
  return ScalaJS.bI(this.mask__I__I__I(i$3, mask))
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.zero__I__I__ = (function(i$4, mask$2) {
  return ScalaJS.bZ(this.zero__I__I__Z(i$4, mask$2))
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.bin__I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__ = (function(prefix$2, mask$3, left, right) {
  return this.bin__I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap(prefix$2, mask$3, left, right)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.join__I__Lscala_collection_immutable_IntMap__I__Lscala_collection_immutable_IntMap__ = (function(p1, t1, p2, t2) {
  return this.join__I__Lscala_collection_immutable_IntMap__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap(p1, t1, p2, t2)
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.branchMask__I__I__ = (function(i$5, j$3) {
  return ScalaJS.bI(this.branchMask__I__I__I(i$5, j$3))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_IntMapUtils$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_IntMapUtils$.prototype = ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype;
ScalaJS.is.scala_collection_immutable_IntMapUtils$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_IntMapUtils$)))
});
ScalaJS.as.scala_collection_immutable_IntMapUtils$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_IntMapUtils$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.IntMapUtils")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_IntMapUtils$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_IntMapUtils$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_IntMapUtils$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_IntMapUtils$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.IntMapUtils;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_IntMapUtils$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_IntMapUtils$: 0
}, false, "scala.collection.immutable.IntMapUtils$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_IntMapUtils$: 1,
  scala_collection_generic_BitOperations$Int: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_IntMapUtils$.prototype.$classData = ScalaJS.data.scala_collection_immutable_IntMapUtils$;
ScalaJS.moduleInstances.scala_collection_immutable_IntMapUtils = undefined;
ScalaJS.modules.scala_collection_immutable_IntMapUtils = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_IntMapUtils)) {
    ScalaJS.moduleInstances.scala_collection_immutable_IntMapUtils = new ScalaJS.c.scala_collection_immutable_IntMapUtils$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_IntMapUtils
});
//@ sourceMappingURL=IntMapUtils$.js.map
