/** @constructor */
ScalaJS.c.scala_collection_immutable_HashMap$ = (function() {
  ScalaJS.c.scala_collection_generic_ImmutableMapFactory.call(this);
  this.defaultMerger$4 = null
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype = new ScalaJS.inheritable.scala_collection_generic_ImmutableMapFactory();
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashMap$;
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.zero__I__I__Z = (function(i, mask) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__zero__Lscala_collection_generic_BitOperations$Int__I__I__Z(this, i, mask)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.mask__I__I__I = (function(i, mask) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__mask__Lscala_collection_generic_BitOperations$Int__I__I__I(this, i, mask)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.hasMatch__I__I__I__Z = (function(key, prefix, m) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__hasMatch__Lscala_collection_generic_BitOperations$Int__I__I__I__Z(this, key, prefix, m)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.unsignedCompare__I__I__Z = (function(i, j) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__unsignedCompare__Lscala_collection_generic_BitOperations$Int__I__I__Z(this, i, j)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.shorter__I__I__Z = (function(m1, m2) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__shorter__Lscala_collection_generic_BitOperations$Int__I__I__Z(this, m1, m2)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.complement__I__I = (function(i) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__complement__Lscala_collection_generic_BitOperations$Int__I__I(this, i)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.bits__I__Lscala_collection_immutable_IndexedSeq = (function(num) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bits__Lscala_collection_generic_BitOperations$Int__I__Lscala_collection_immutable_IndexedSeq(this, num)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.bitString__I__T__T = (function(num, sep) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bitString__Lscala_collection_generic_BitOperations$Int__I__T__T(this, num, sep)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.highestOneBit__I__I = (function(j) {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__highestOneBit__Lscala_collection_generic_BitOperations$Int__I__I(this, j)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.bitString$default$2__T = (function() {
  return ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bitString$default$2__Lscala_collection_generic_BitOperations$Int__T(this)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.scala$collection$immutable$HashMap$$liftMerger__Lscala_Function2__Lscala_collection_immutable_HashMap$Merger = (function(mergef) {
  if (ScalaJS.anyRefEqEq(mergef, null)) {
    return this.defaultMerger$4
  } else {
    return this.liftMerger0__p4__Lscala_Function2__Lscala_collection_immutable_HashMap$Merger(mergef)
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.liftMerger0__p4__Lscala_Function2__Lscala_collection_immutable_HashMap$Merger = (function(mergef) {
  return new ScalaJS.c.scala_collection_immutable_HashMap$$anon$2().init___Lscala_Function2(mergef)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom().init___Lscala_collection_generic_GenMapFactory(this)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.empty__Lscala_collection_immutable_HashMap = (function() {
  return ScalaJS.modules.scala_collection_immutable_HashMap$EmptyHashMap()
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.scala$collection$immutable$HashMap$$makeHashTrieMap__I__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap__I__I__Lscala_collection_immutable_HashMap$HashTrieMap = (function(hash0, elem0, hash1, elem1, level, size) {
  var index0 = ((hash0 >>> level) & 31);
  var index1 = ((hash1 >>> level) & 31);
  if ((index0 !== index1)) {
    var bitmap = ((1 << index0) | (1 << index1));
    var elems = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashMap.getArrayOf(), [2]);
    if ((index0 < index1)) {
      elems.underlying[0] = elem0;
      elems.underlying[1] = elem1
    } else {
      elems.underlying[0] = elem1;
      elems.underlying[1] = elem0
    };
    return new ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap().init___I__ALscala_collection_immutable_HashMap__I(bitmap, elems, size)
  } else {
    var elems$2 = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashMap.getArrayOf(), [1]);
    var bitmap$2 = (1 << index0);
    elems$2.underlying[0] = this.scala$collection$immutable$HashMap$$makeHashTrieMap__I__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap__I__I__Lscala_collection_immutable_HashMap$HashTrieMap(hash0, elem0, hash1, elem1, (level + 5), size);
    return new ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap().init___I__ALscala_collection_immutable_HashMap__I(bitmap$2, elems$2, size)
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.readResolve__p4__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_HashMap()
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.empty__Lscala_collection_GenMap = (function() {
  return this.empty__Lscala_collection_immutable_HashMap()
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_immutable_HashMap()
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_generic_ImmutableMapFactory.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_HashMap = this;
  ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__$init$__Lscala_collection_generic_BitOperations$Int__V(this);
  this.defaultMerger$4 = this.liftMerger0__p4__Lscala_Function2__Lscala_collection_immutable_HashMap$Merger(new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(a, b) {
      return a
    })
  })()));
  return this
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.highestOneBit__I__ = (function(j) {
  return ScalaJS.bI(this.highestOneBit__I__I(j))
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.bitString__I__T__ = (function(num, sep) {
  return this.bitString__I__T__T(num, sep)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.bits__I__ = (function(num$2) {
  return this.bits__I__Lscala_collection_immutable_IndexedSeq(num$2)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.complement__I__ = (function(i) {
  return ScalaJS.bI(this.complement__I__I(i))
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.shorter__I__I__ = (function(m1, m2) {
  return ScalaJS.bZ(this.shorter__I__I__Z(m1, m2))
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.unsignedCompare__I__I__ = (function(i$2, j$2) {
  return ScalaJS.bZ(this.unsignedCompare__I__I__Z(i$2, j$2))
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.hasMatch__I__I__I__ = (function(key, prefix, m) {
  return ScalaJS.bZ(this.hasMatch__I__I__I__Z(key, prefix, m))
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.mask__I__I__ = (function(i$3, mask) {
  return ScalaJS.bI(this.mask__I__I__I(i$3, mask))
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.zero__I__I__ = (function(i$4, mask$2) {
  return ScalaJS.bZ(this.zero__I__I__Z(i$4, mask$2))
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.scala$collection$immutable$HashMap$$makeHashTrieMap__I__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap__I__I__ = (function(hash0, elem0, hash1, elem1, level, size) {
  return this.scala$collection$immutable$HashMap$$makeHashTrieMap__I__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap__I__I__Lscala_collection_immutable_HashMap$HashTrieMap(hash0, elem0, hash1, elem1, level, size)
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.scala$collection$immutable$HashMap$$liftMerger__Lscala_Function2__ = (function(mergef) {
  return this.scala$collection$immutable$HashMap$$liftMerger__Lscala_Function2__Lscala_collection_immutable_HashMap$Merger(mergef)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashMap$.prototype = ScalaJS.c.scala_collection_immutable_HashMap$.prototype;
ScalaJS.is.scala_collection_immutable_HashMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashMap$)))
});
ScalaJS.as.scala_collection_immutable_HashMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashMap$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashMap$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashMap$: 0
}, false, "scala.collection.immutable.HashMap$", ScalaJS.data.scala_collection_generic_ImmutableMapFactory, {
  scala_collection_immutable_HashMap$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_BitOperations$Int: 1,
  scala_collection_generic_ImmutableMapFactory: 1,
  scala_collection_generic_MapFactory: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_HashMap$.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashMap$;
ScalaJS.moduleInstances.scala_collection_immutable_HashMap = undefined;
ScalaJS.modules.scala_collection_immutable_HashMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_HashMap)) {
    ScalaJS.moduleInstances.scala_collection_immutable_HashMap = new ScalaJS.c.scala_collection_immutable_HashMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_HashMap
});
//@ sourceMappingURL=HashMap$.js.map
