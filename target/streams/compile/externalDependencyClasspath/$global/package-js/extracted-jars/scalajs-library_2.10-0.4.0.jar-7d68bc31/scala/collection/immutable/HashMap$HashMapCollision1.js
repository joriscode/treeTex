/** @constructor */
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1 = (function() {
  ScalaJS.c.scala_collection_immutable_HashMap.call(this);
  this.hash$6 = 0;
  this.kvs$6 = null
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype = new ScalaJS.inheritable.scala_collection_immutable_HashMap();
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1;
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.hash__I = (function() {
  return this.hash$6
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.kvs__Lscala_collection_immutable_ListMap = (function() {
  return this.kvs$6
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.size__I = (function() {
  return this.kvs__Lscala_collection_immutable_ListMap().size__I()
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.get0__O__I__I__Lscala_Option = (function(key, hash, level) {
  if ((hash === this.hash__I())) {
    return this.kvs__Lscala_collection_immutable_ListMap().get__O__Lscala_Option(key)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap = (function(key, hash, level, value, kv, merger) {
  if ((hash === this.hash__I())) {
    if (((merger === null) || (!this.kvs__Lscala_collection_immutable_ListMap().contains__O__Z(key)))) {
      return new ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1().init___I__Lscala_collection_immutable_ListMap(hash, this.kvs__Lscala_collection_immutable_ListMap().updated__O__O__Lscala_collection_immutable_ListMap(key, value))
    } else {
      return new ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1().init___I__Lscala_collection_immutable_ListMap(hash, this.kvs__Lscala_collection_immutable_ListMap().$$plus__Lscala_Tuple2__Lscala_collection_immutable_ListMap(merger.apply__Lscala_Tuple2__Lscala_Tuple2__Lscala_Tuple2(new ScalaJS.c.scala_Tuple2().init___O__O(key, this.kvs__Lscala_collection_immutable_ListMap().apply__O__O(key)), kv)))
    }
  } else {
    var that = new ScalaJS.c.scala_collection_immutable_HashMap$HashMap1().init___O__I__O__Lscala_Tuple2(key, hash, value, kv);
    return ScalaJS.modules.scala_collection_immutable_HashMap().scala$collection$immutable$HashMap$$makeHashTrieMap__I__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap__I__I__Lscala_collection_immutable_HashMap$HashTrieMap(this.hash__I(), this, hash, that, level, (this.size__I() + 1))
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.removed0__O__I__I__Lscala_collection_immutable_HashMap = (function(key, hash, level) {
  if ((hash === this.hash__I())) {
    var kvs1 = this.kvs__Lscala_collection_immutable_ListMap().$$minus__O__Lscala_collection_immutable_ListMap(key);
    if (kvs1.isEmpty__Z()) {
      return ScalaJS.modules.scala_collection_immutable_HashMap().empty__Lscala_collection_immutable_HashMap()
    } else {
      if (kvs1.tail__Lscala_collection_immutable_ListMap().isEmpty__Z()) {
        var kv = ScalaJS.as.scala_Tuple2(kvs1.head__O());
        return new ScalaJS.c.scala_collection_immutable_HashMap$HashMap1().init___O__I__O__Lscala_Tuple2(kv.$$und1__O(), hash, kv.$$und2__O(), kv)
      } else {
        return new ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1().init___I__Lscala_collection_immutable_ListMap(hash, kvs1)
      }
    }
  } else {
    return this
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.kvs__Lscala_collection_immutable_ListMap().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.kvs__Lscala_collection_immutable_ListMap().foreach__Lscala_Function1__V(f)
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.split__Lscala_collection_immutable_Seq = (function() {
  var x1 = this.kvs__Lscala_collection_immutable_ListMap().splitAt__I__Lscala_Tuple2(((this.kvs__Lscala_collection_immutable_ListMap().size__I() / 2) | 0));
  matchEnd3: {
    if ((x1 !== null)) {
      var x = ScalaJS.as.scala_collection_immutable_ListMap(x1.$$und1__O());
      var y = ScalaJS.as.scala_collection_immutable_ListMap(x1.$$und2__O());
      var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(x, y);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var x$2 = ScalaJS.as.scala_collection_immutable_ListMap(x$1.$$und1__O());
  var y$2 = ScalaJS.as.scala_collection_immutable_ListMap(x$1.$$und2__O());
  return ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_immutable_HashMap$HashMapCollision1.getArrayOf(), [this.newhm$1__p6__Lscala_collection_immutable_ListMap__Lscala_collection_immutable_HashMap$HashMapCollision1(x$2), this.newhm$1__p6__Lscala_collection_immutable_ListMap__Lscala_collection_immutable_HashMap$HashMapCollision1(y$2)]), 1)))
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.merge0__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap = (function(that, level, merger) {
  var m = new ScalaJS.c.scala_runtime_ObjectRef().init___O(that);
  this.kvs__Lscala_collection_immutable_ListMap().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, level$1, merger$1, m$1) {
    return (function(p) {
      m$1.elem$1 = ScalaJS.as.scala_collection_immutable_HashMap(m$1.elem$1).updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(p.$$und1__O(), arg$outer.hash__I(), level$1, p.$$und2__O(), p, merger$1);
      return ScalaJS.bV(undefined)
    })
  })(this, level, merger, m)));
  return ScalaJS.as.scala_collection_immutable_HashMap(m.elem$1)
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.newhm$1__p6__Lscala_collection_immutable_ListMap__Lscala_collection_immutable_HashMap$HashMapCollision1 = (function(lm) {
  return new ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1().init___I__Lscala_collection_immutable_ListMap(this.hash__I(), lm)
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.init___I__Lscala_collection_immutable_ListMap = (function(hash, kvs) {
  this.hash$6 = hash;
  this.kvs$6 = kvs;
  ScalaJS.c.scala_collection_immutable_HashMap.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.kvs__ = (function() {
  return this.kvs__Lscala_collection_immutable_ListMap()
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.hash__ = (function() {
  return ScalaJS.bI(this.hash__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashMap$HashMapCollision1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashMap$HashMapCollision1.prototype = ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype;
ScalaJS.is.scala_collection_immutable_HashMap$HashMapCollision1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashMap$HashMapCollision1)))
});
ScalaJS.as.scala_collection_immutable_HashMap$HashMapCollision1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashMap$HashMapCollision1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashMap$HashMapCollision1")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashMap$HashMapCollision1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashMap$HashMapCollision1)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashMap$HashMapCollision1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashMap$HashMapCollision1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashMapCollision1;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashMap$HashMapCollision1 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashMap$HashMapCollision1: 0
}, false, "scala.collection.immutable.HashMap$HashMapCollision1", ScalaJS.data.scala_collection_immutable_HashMap, {
  scala_collection_immutable_HashMap$HashMapCollision1: 1,
  scala_collection_immutable_HashMap: 1,
  scala_collection_CustomParallelizable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_AbstractMap: 1,
  scala_collection_immutable_Map: 1,
  scala_collection_immutable_MapLike: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractMap: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_HashMap$HashMapCollision1.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashMap$HashMapCollision1;
//@ sourceMappingURL=HashMap$HashMapCollision1.js.map
