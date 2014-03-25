/** @constructor */
ScalaJS.c.scala_collection_immutable_TrieIterator = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.elems$2 = null;
  this.scala$collection$immutable$TrieIterator$$depth$f = 0;
  this.scala$collection$immutable$TrieIterator$$arrayStack$f = null;
  this.scala$collection$immutable$TrieIterator$$posStack$f = null;
  this.scala$collection$immutable$TrieIterator$$arrayD$f = null;
  this.scala$collection$immutable$TrieIterator$$posD$f = 0;
  this.scala$collection$immutable$TrieIterator$$subIter$f = null
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_TrieIterator;
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initDepth__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initArrayStack__AALscala_collection_immutable_Iterable = (function() {
  return ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_Iterable.getArrayOf().getArrayOf(), [6])
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initPosStack__AI = (function() {
  return ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [6])
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initArrayD__ALscala_collection_immutable_Iterable = (function() {
  return this.elems$2
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initPosD__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initSubIter__Lscala_collection_Iterator = (function() {
  return null
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.getElems__p2__Lscala_collection_immutable_Iterable__ALscala_collection_immutable_Iterable = (function(x) {
  var x1 = x;
  matchEnd5: {
    if (ScalaJS.is.scala_collection_immutable_HashMap$HashTrieMap(x1)) {
      var x2 = ScalaJS.as.scala_collection_immutable_HashMap$HashTrieMap(x1);
      var jsx$1 = ScalaJS.asArrayOf.scala_collection_AbstractIterable(x2.elems__ALscala_collection_immutable_HashMap(), 1);
      break matchEnd5
    };
    if (ScalaJS.is.scala_collection_immutable_HashSet$HashTrieSet(x1)) {
      var x3 = ScalaJS.as.scala_collection_immutable_HashSet$HashTrieSet(x1);
      var jsx$1 = ScalaJS.asArrayOf.scala_collection_AbstractIterable(x3.elems__ALscala_collection_immutable_HashSet(), 1);
      break matchEnd5
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  return ScalaJS.asArrayOf.scala_collection_immutable_Iterable(jsx$1, 1)
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.collisionToArray__p2__Lscala_collection_immutable_Iterable__ALscala_collection_immutable_Iterable = (function(x) {
  var x1 = x;
  matchEnd5: {
    if (ScalaJS.is.scala_collection_immutable_HashMap$HashMapCollision1(x1)) {
      var x2 = ScalaJS.as.scala_collection_immutable_HashMap$HashMapCollision1(x1);
      var jsx$2 = ScalaJS.asArrayOf.scala_collection_AbstractIterable(ScalaJS.as.scala_collection_TraversableOnce(x2.kvs__Lscala_collection_immutable_ListMap().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
        return (function(x) {
          return ScalaJS.as.scala_collection_immutable_HashMap(ScalaJS.modules.scala_collection_immutable_HashMap().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [x]), 1))))
        })
      })()), ScalaJS.modules.scala_collection_immutable_Iterable().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_collection_immutable_HashMap.getClassOf())), 1);
      break matchEnd5
    };
    if (ScalaJS.is.scala_collection_immutable_HashSet$HashSetCollision1(x1)) {
      var x3 = ScalaJS.as.scala_collection_immutable_HashSet$HashSetCollision1(x1);
      var jsx$2 = ScalaJS.asArrayOf.scala_collection_AbstractIterable(ScalaJS.as.scala_collection_TraversableOnce(x3.ks__Lscala_collection_immutable_ListSet().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
        return (function(x) {
          return ScalaJS.as.scala_collection_immutable_HashSet(ScalaJS.modules.scala_collection_immutable_HashSet().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [x]))))
        })
      })()), ScalaJS.modules.scala_collection_immutable_ListSet().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_collection_immutable_HashSet.getClassOf())), 1);
      break matchEnd5
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  return ScalaJS.asArrayOf.scala_collection_immutable_Iterable(jsx$2, 1)
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.isTrie__p2__O__Z = (function(x) {
  var x1 = x;
  matchEnd8: {
    if (ScalaJS.is.scala_collection_immutable_HashMap$HashTrieMap(x1)) {
      var jsx$3 = true;
      break matchEnd8
    };
    if (ScalaJS.is.scala_collection_immutable_HashSet$HashTrieSet(x1)) {
      var jsx$3 = true;
      break matchEnd8
    };
    var jsx$3 = false;
    break matchEnd8
  };
  if (jsx$3) {
    return true
  };
  return false
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.isContainer__p2__O__Z = (function(x) {
  var x1 = x;
  matchEnd8: {
    if (ScalaJS.is.scala_collection_immutable_HashMap$HashMap1(x1)) {
      var jsx$4 = true;
      break matchEnd8
    };
    if (ScalaJS.is.scala_collection_immutable_HashSet$HashSet1(x1)) {
      var jsx$4 = true;
      break matchEnd8
    };
    var jsx$4 = false;
    break matchEnd8
  };
  if (jsx$4) {
    return true
  };
  return false
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.dupIterator__Lscala_collection_immutable_TrieIterator = (function() {
  return new ScalaJS.c.scala_collection_immutable_TrieIterator$DupIterator().init___Lscala_collection_immutable_TrieIterator__ALscala_collection_immutable_Iterable(this, this.elems$2)
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.newIterator__p2__ALscala_collection_immutable_Iterable__Lscala_collection_immutable_TrieIterator = (function(xs) {
  return new ScalaJS.c.scala_collection_immutable_TrieIterator$$anon$1().init___Lscala_collection_immutable_TrieIterator__ALscala_collection_immutable_Iterable(this, xs)
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.iteratorWithSize__p2__ALscala_collection_immutable_Iterable__Lscala_Tuple2 = (function(arr) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.newIterator__p2__ALscala_collection_immutable_Iterable__Lscala_collection_immutable_TrieIterator(arr), ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.scala_Int(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(arr, 1)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.bI(x$1.size__I())
    })
  })()), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag())), 1)).sum__Lscala_math_Numeric__O(ScalaJS.modules.scala_math_Numeric$IntIsIntegral()))
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.arrayToIterators__p2__ALscala_collection_immutable_Iterable__Lscala_Tuple2 = (function(arr) {
  var x1 = ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(arr, 1)).splitAt__I__Lscala_Tuple2(((arr.underlying.length / 2) | 0));
  matchEnd3: {
    if ((x1 !== null)) {
      var fst = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x1.$$und1__O(), 1);
      var snd = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x1.$$und2__O(), 1);
      var x$2 = new ScalaJS.c.scala_Tuple2().init___O__O(fst, snd);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var fst$2 = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x$2.$$und1__O(), 1);
  var snd$2 = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x$2.$$und2__O(), 1);
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.iteratorWithSize__p2__ALscala_collection_immutable_Iterable__Lscala_Tuple2(snd$2), this.newIterator__p2__ALscala_collection_immutable_Iterable__Lscala_collection_immutable_TrieIterator(fst$2))
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.splitArray__p2__ALscala_collection_immutable_Iterable__Lscala_Tuple2 = (function(ad) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((ad.underlying.length > 1)) {
      return _$this.arrayToIterators__p2__ALscala_collection_immutable_Iterable__Lscala_Tuple2(ad)
    } else {
      var x1 = ad.underlying[0];
      matchEnd8: {
        if (ScalaJS.is.scala_collection_immutable_HashMap$HashMapCollision1(x1)) {
          var jsx$5 = true;
          break matchEnd8
        };
        if (ScalaJS.is.scala_collection_immutable_HashSet$HashSetCollision1(x1)) {
          var jsx$5 = true;
          break matchEnd8
        };
        var jsx$5 = false;
        break matchEnd8
      };
      if (jsx$5) {
        return _$this.arrayToIterators__p2__ALscala_collection_immutable_Iterable__Lscala_Tuple2(_$this.collisionToArray__p2__Lscala_collection_immutable_Iterable__ALscala_collection_immutable_Iterable(ad.underlying[0]))
      };
      ad = _$this.getElems__p2__Lscala_collection_immutable_Iterable__ALscala_collection_immutable_Iterable(ad.underlying[0]);
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.hasNext__Z = (function() {
  return ((this.scala$collection$immutable$TrieIterator$$subIter$f !== null) || (this.scala$collection$immutable$TrieIterator$$depth$f >= 0))
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.next__O = (function() {
  if ((this.scala$collection$immutable$TrieIterator$$subIter$f !== null)) {
    var el = this.scala$collection$immutable$TrieIterator$$subIter$f.next__O();
    if ((!this.scala$collection$immutable$TrieIterator$$subIter$f.hasNext__Z())) {
      this.scala$collection$immutable$TrieIterator$$subIter$f = null
    };
    return el
  } else {
    return this.next0__p2__ALscala_collection_immutable_Iterable__I__O(this.scala$collection$immutable$TrieIterator$$arrayD$f, this.scala$collection$immutable$TrieIterator$$posD$f)
  }
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.next0__p2__ALscala_collection_immutable_Iterable__I__O = (function(elems, i) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((i === (elems.underlying.length - 1))) {
      _$this.scala$collection$immutable$TrieIterator$$depth$f = (_$this.scala$collection$immutable$TrieIterator$$depth$f - 1);
      if ((_$this.scala$collection$immutable$TrieIterator$$depth$f >= 0)) {
        _$this.scala$collection$immutable$TrieIterator$$arrayD$f = _$this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[_$this.scala$collection$immutable$TrieIterator$$depth$f];
        _$this.scala$collection$immutable$TrieIterator$$posD$f = _$this.scala$collection$immutable$TrieIterator$$posStack$f.underlying[_$this.scala$collection$immutable$TrieIterator$$depth$f];
        _$this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[_$this.scala$collection$immutable$TrieIterator$$depth$f] = null
      } else {
        _$this.scala$collection$immutable$TrieIterator$$arrayD$f = null;
        _$this.scala$collection$immutable$TrieIterator$$posD$f = 0
      }
    } else {
      _$this.scala$collection$immutable$TrieIterator$$posD$f = (_$this.scala$collection$immutable$TrieIterator$$posD$f + 1)
    };
    var m = elems.underlying[i];
    if (_$this.isContainer__p2__O__Z(m)) {
      return _$this.getElem__O__O(m)
    } else {
      if (_$this.isTrie__p2__O__Z(m)) {
        if ((_$this.scala$collection$immutable$TrieIterator$$depth$f >= 0)) {
          _$this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[_$this.scala$collection$immutable$TrieIterator$$depth$f] = _$this.scala$collection$immutable$TrieIterator$$arrayD$f;
          _$this.scala$collection$immutable$TrieIterator$$posStack$f.underlying[_$this.scala$collection$immutable$TrieIterator$$depth$f] = _$this.scala$collection$immutable$TrieIterator$$posD$f
        };
        _$this.scala$collection$immutable$TrieIterator$$depth$f = (_$this.scala$collection$immutable$TrieIterator$$depth$f + 1);
        _$this.scala$collection$immutable$TrieIterator$$arrayD$f = _$this.getElems__p2__Lscala_collection_immutable_Iterable__ALscala_collection_immutable_Iterable(m);
        _$this.scala$collection$immutable$TrieIterator$$posD$f = 0;
        var temp$elems = _$this.getElems__p2__Lscala_collection_immutable_Iterable__ALscala_collection_immutable_Iterable(m);
        var temp$i = 0;
        elems = temp$elems;
        i = temp$i;
        continue tailCallLoop
      } else {
        _$this.scala$collection$immutable$TrieIterator$$subIter$f = m.iterator__Lscala_collection_Iterator();
        return _$this.next__O()
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.split__Lscala_Tuple2 = (function() {
  if ((((this.scala$collection$immutable$TrieIterator$$arrayD$f !== null) && (this.scala$collection$immutable$TrieIterator$$depth$f === 0)) && (this.scala$collection$immutable$TrieIterator$$posD$f === 0))) {
    return this.splitArray__p2__ALscala_collection_immutable_Iterable__Lscala_Tuple2(this.scala$collection$immutable$TrieIterator$$arrayD$f)
  };
  if ((this.scala$collection$immutable$TrieIterator$$subIter$f !== null)) {
    var buff = this.scala$collection$immutable$TrieIterator$$subIter$f.toBuffer__Lscala_collection_mutable_Buffer();
    this.scala$collection$immutable$TrieIterator$$subIter$f = null;
    return new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_Tuple2().init___O__O(buff.iterator__Lscala_collection_Iterator(), ScalaJS.bI(buff.length__I())), this)
  } else {
    if ((this.scala$collection$immutable$TrieIterator$$depth$f > 0)) {
      var topmost = this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[0];
      if ((this.scala$collection$immutable$TrieIterator$$posStack$f.underlying[0] === (this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[0].underlying.length - 1))) {
        var snd = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(ScalaJS.modules.scala_Array().apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_immutable_Iterable.getArrayOf(), [ScalaJS.as.scala_collection_immutable_Iterable(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[0], 1)).last__O())]), 1)), ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_collection_immutable_Iterable.getClassOf())), 1);
        var szsnd = snd.underlying[0].size__I();
        this.scala$collection$immutable$TrieIterator$$depth$f = (this.scala$collection$immutable$TrieIterator$$depth$f - 1);
        ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(1), this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying.length).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
          return (function(i) {
            i = ScalaJS.uI(i);
            arg$outer.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[(i - 1)] = arg$outer.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[i];
            return ScalaJS.bV(undefined)
          })
        })(this)));
        this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[(this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying.length - 1)] = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(ScalaJS.modules.scala_Array().apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_immutable_Iterable.getArrayOf(), [null]), 1)), ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_collection_immutable_Iterable.getClassOf())), 1);
        this.scala$collection$immutable$TrieIterator$$posStack$f = ScalaJS.asArrayOf.scala_Int(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.scala_Int(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(this.scala$collection$immutable$TrieIterator$$posStack$f).tail__O(), 1)).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.scala_Int(ScalaJS.modules.scala_Array().apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Int.getArrayOf(), [0])), ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag()), 1)), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag())), 1);
        return new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_Tuple2().init___O__O(this.newIterator__p2__ALscala_collection_immutable_Iterable__Lscala_collection_immutable_TrieIterator(snd), ScalaJS.bI(szsnd)), this)
      } else {
        var x1 = ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[0], 1)).splitAt__I__Lscala_Tuple2((this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[0].underlying.length - ((((this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[0].underlying.length - this.scala$collection$immutable$TrieIterator$$posStack$f.underlying[0]) + 1) / 2) | 0)));
        matchEnd3: {
          if ((x1 !== null)) {
            var fst = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x1.$$und1__O(), 1);
            var snd$2 = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x1.$$und2__O(), 1);
            var x$3 = new ScalaJS.c.scala_Tuple2().init___O__O(fst, snd$2);
            break matchEnd3
          };
          throw new ScalaJS.c.scala_MatchError().init___O(x1)
        };
        var fst$2 = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x$3.$$und1__O(), 1);
        var snd$3 = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x$3.$$und2__O(), 1);
        this.scala$collection$immutable$TrieIterator$$arrayStack$f.underlying[0] = fst$2;
        return new ScalaJS.c.scala_Tuple2().init___O__O(this.iteratorWithSize__p2__ALscala_collection_immutable_Iterable__Lscala_Tuple2(snd$3), this)
      }
    } else {
      if ((this.scala$collection$immutable$TrieIterator$$posD$f === (this.scala$collection$immutable$TrieIterator$$arrayD$f.underlying.length - 1))) {
        var m = this.scala$collection$immutable$TrieIterator$$arrayD$f.underlying[this.scala$collection$immutable$TrieIterator$$posD$f];
        if (this.isTrie__p2__O__Z(m)) {
          var jsx$6 = this.getElems__p2__Lscala_collection_immutable_Iterable__ALscala_collection_immutable_Iterable(m)
        } else {
          var jsx$6 = this.collisionToArray__p2__Lscala_collection_immutable_Iterable__ALscala_collection_immutable_Iterable(m)
        };
        return this.arrayToIterators__p2__ALscala_collection_immutable_Iterable__Lscala_Tuple2(jsx$6)
      } else {
        var x1$2 = ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.scala$collection$immutable$TrieIterator$$arrayD$f, 1)).splitAt__I__Lscala_Tuple2((this.scala$collection$immutable$TrieIterator$$arrayD$f.underlying.length - ((((this.scala$collection$immutable$TrieIterator$$arrayD$f.underlying.length - this.scala$collection$immutable$TrieIterator$$posD$f) + 1) / 2) | 0)));
        matchEnd3$2: {
          if ((x1$2 !== null)) {
            var fst$3 = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x1$2.$$und1__O(), 1);
            var snd$4 = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x1$2.$$und2__O(), 1);
            var x$4 = new ScalaJS.c.scala_Tuple2().init___O__O(fst$3, snd$4);
            break matchEnd3$2
          };
          throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
        };
        var fst$4 = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x$4.$$und1__O(), 1);
        var snd$5 = ScalaJS.asArrayOf.scala_collection_immutable_Iterable(x$4.$$und2__O(), 1);
        this.scala$collection$immutable$TrieIterator$$arrayD$f = fst$4;
        return new ScalaJS.c.scala_Tuple2().init___O__O(this.iteratorWithSize__p2__ALscala_collection_immutable_Iterable__Lscala_Tuple2(snd$5), this)
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.init___ALscala_collection_immutable_Iterable = (function(elems) {
  this.elems$2 = elems;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.scala$collection$immutable$TrieIterator$$depth$f = this.initDepth__I();
  this.scala$collection$immutable$TrieIterator$$arrayStack$f = this.initArrayStack__AALscala_collection_immutable_Iterable();
  this.scala$collection$immutable$TrieIterator$$posStack$f = this.initPosStack__AI();
  this.scala$collection$immutable$TrieIterator$$arrayD$f = this.initArrayD__ALscala_collection_immutable_Iterable();
  this.scala$collection$immutable$TrieIterator$$posD$f = this.initPosD__I();
  this.scala$collection$immutable$TrieIterator$$subIter$f = this.initSubIter__Lscala_collection_Iterator();
  return this
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.split__ = (function() {
  return this.split__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.dupIterator__ = (function() {
  return this.dupIterator__Lscala_collection_immutable_TrieIterator()
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initSubIter__ = (function() {
  return this.initSubIter__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initPosD__ = (function() {
  return ScalaJS.bI(this.initPosD__I())
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initArrayD__ = (function() {
  return this.initArrayD__ALscala_collection_immutable_Iterable()
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initPosStack__ = (function() {
  return this.initPosStack__AI()
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initArrayStack__ = (function() {
  return this.initArrayStack__AALscala_collection_immutable_Iterable()
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.initDepth__ = (function() {
  return ScalaJS.bI(this.initDepth__I())
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.getElem__O__ = (function(x) {
  return this.getElem__O__O(x)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_TrieIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_TrieIterator.prototype = ScalaJS.c.scala_collection_immutable_TrieIterator.prototype;
ScalaJS.is.scala_collection_immutable_TrieIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_TrieIterator)))
});
ScalaJS.as.scala_collection_immutable_TrieIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_TrieIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.TrieIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_TrieIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_TrieIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_TrieIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_TrieIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.TrieIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_TrieIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_TrieIterator: 0
}, false, "scala.collection.immutable.TrieIterator", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_immutable_TrieIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_TrieIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_TrieIterator;
//@ sourceMappingURL=TrieIterator.js.map
