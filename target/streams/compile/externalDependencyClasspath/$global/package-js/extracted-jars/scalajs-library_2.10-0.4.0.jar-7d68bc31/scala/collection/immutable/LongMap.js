/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMap = (function() {
  ScalaJS.c.scala_collection_immutable_AbstractMap.call(this)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype = new ScalaJS.inheritable.scala_collection_immutable_AbstractMap();
ScalaJS.c.scala_collection_immutable_LongMap.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMap;
ScalaJS.c.scala_collection_immutable_LongMap.prototype.empty__Lscala_collection_immutable_LongMap = (function() {
  return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.toList__Lscala_collection_immutable_List = (function() {
  var buffer = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(buffer$1) {
    return (function(x$1) {
      return buffer$1.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(x$1)
    })
  })(buffer)));
  return buffer.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.iterator__Lscala_collection_Iterator = (function() {
  var x1 = this;
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
  };
  return new ScalaJS.c.scala_collection_immutable_LongMapEntryIterator().init___Lscala_collection_immutable_LongMap(this)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.foreach__Lscala_Function1__V = (function(f) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = _$this;
    matchEnd8: {
      if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
        var x4 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
        var left = x4.left__Lscala_collection_immutable_LongMap();
        var right = x4.right__Lscala_collection_immutable_LongMap();
        left.foreach__Lscala_Function1__V(f);
        _$this = right;
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      };
      if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
        var x5 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
        var key = x5.key__J();
        var value = x5.value__O();
        f.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bJ(key), value));
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      };
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    return undefined
  }
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.keysIterator__Lscala_collection_Iterator = (function() {
  var x1 = this;
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
  };
  return new ScalaJS.c.scala_collection_immutable_LongMapKeyIterator().init___Lscala_collection_immutable_LongMap(this)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.foreachKey__Lscala_Function1__V = (function(f) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = _$this;
    matchEnd9: {
      if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
        var x4 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
        var left = x4.left__Lscala_collection_immutable_LongMap();
        var right = x4.right__Lscala_collection_immutable_LongMap();
        left.foreachKey__Lscala_Function1__V(f);
        _$this = right;
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd9
      };
      if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
        var x6 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
        var key = x6.key__J();
        f.apply$mcVJ$sp__J__V(key);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd9
      };
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd9
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    return undefined
  }
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.valuesIterator__Lscala_collection_Iterator = (function() {
  var x1 = this;
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
  };
  return new ScalaJS.c.scala_collection_immutable_LongMapValueIterator().init___Lscala_collection_immutable_LongMap(this)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.foreachValue__Lscala_Function1__V = (function(f) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = _$this;
    matchEnd9: {
      if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
        var x4 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
        var left = x4.left__Lscala_collection_immutable_LongMap();
        var right = x4.right__Lscala_collection_immutable_LongMap();
        left.foreachValue__Lscala_Function1__V(f);
        _$this = right;
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd9
      };
      if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
        var x6 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
        var value = x6.value__O();
        ScalaJS.as.scala_runtime_BoxedUnit(f.apply__O__O(value));
        break matchEnd9
      };
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd9
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    return undefined
  }
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.stringPrefix__T = (function() {
  return "LongMap"
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.isEmpty__Z = (function() {
  return ScalaJS.anyRefEqEq(this, ScalaJS.modules.scala_collection_immutable_LongMap$Nil())
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.filter__Lscala_Function1__Lscala_collection_immutable_LongMap = (function(f) {
  var x1 = this;
  if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
    var prefix = x2.prefix__J();
    var mask = x2.mask__J();
    var left = x2.left__Lscala_collection_immutable_LongMap();
    var right = x2.right__Lscala_collection_immutable_LongMap();
    var x1$2 = new ScalaJS.c.scala_Tuple2().init___O__O(left.filter__Lscala_Function1__Lscala_collection_immutable_LongMap(f), right.filter__Lscala_Function1__Lscala_collection_immutable_LongMap(f));
    matchEnd3: {
      if ((x1$2 !== null)) {
        var newleft = ScalaJS.as.scala_collection_immutable_LongMap(x1$2.$$und1__O());
        var newright = ScalaJS.as.scala_collection_immutable_LongMap(x1$2.$$und2__O());
        var x$2 = new ScalaJS.c.scala_Tuple2().init___O__O(newleft, newright);
        break matchEnd3
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
    };
    var newleft$2 = ScalaJS.as.scala_collection_immutable_LongMap(x$2.$$und1__O());
    var newright$2 = ScalaJS.as.scala_collection_immutable_LongMap(x$2.$$und2__O());
    if (((left === newleft$2) && (right === newright$2))) {
      return this
    } else {
      return ScalaJS.modules.scala_collection_immutable_LongMapUtils().bin__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix, mask, newleft$2, newright$2)
    }
  };
  if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
    var x3 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
    var key = x3.key__J();
    var value = x3.value__O();
    if (ScalaJS.uZ(f.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bJ(key), value)))) {
      return this
    } else {
      return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
    }
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
    return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.transform__Lscala_Function2__Lscala_collection_immutable_LongMap = (function(f) {
  var x1 = this;
  if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
    var left = x2.left__Lscala_collection_immutable_LongMap();
    var right = x2.right__Lscala_collection_immutable_LongMap();
    return x2.bin__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(left.transform__Lscala_Function2__Lscala_collection_immutable_LongMap(f), right.transform__Lscala_Function2__Lscala_collection_immutable_LongMap(f))
  };
  if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
    var x3 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
    var key = x3.key__J();
    var value = x3.value__O();
    return x3.withValue__O__Lscala_collection_immutable_LongMap$Tip(f.apply__O__O__O(ScalaJS.bJ(key), value))
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
    return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.size__I = (function() {
  var x1 = this;
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
    return 0
  };
  if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
    return 1
  };
  if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
    var x7 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
    var left = x7.left__Lscala_collection_immutable_LongMap();
    var right = x7.right__Lscala_collection_immutable_LongMap();
    return (left.size__I() + right.size__I())
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.get__J__Lscala_Option = (function(key) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = _$this;
    if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
      var x2 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
      var mask = x2.mask__J();
      var left = x2.left__Lscala_collection_immutable_LongMap();
      var right = x2.right__Lscala_collection_immutable_LongMap();
      if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().zero__J__J__Z(key, mask)) {
        _$this = left;
        continue tailCallLoop
      } else {
        _$this = right;
        continue tailCallLoop
      }
    };
    if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
      var x3 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
      var key2 = x3.key__J();
      var value = x3.value__O();
      if (key.equals__O__Z(key2)) {
        return new ScalaJS.c.scala_Some().init___O(value)
      } else {
        return ScalaJS.modules.scala_None()
      }
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
      return ScalaJS.modules.scala_None()
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.getOrElse__J__Lscala_Function0__O = (function(key, default$2) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = _$this;
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
      return default$2.apply__O()
    };
    if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
      var x2 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
      var key2 = x2.key__J();
      var value = x2.value__O();
      if (key.equals__O__Z(key2)) {
        return value
      } else {
        return default$2.apply__O()
      }
    };
    if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
      var x3 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
      var mask = x3.mask__J();
      var left = x3.left__Lscala_collection_immutable_LongMap();
      var right = x3.right__Lscala_collection_immutable_LongMap();
      if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().zero__J__J__Z(key, mask)) {
        _$this = left;
        continue tailCallLoop
      } else {
        _$this = right;
        continue tailCallLoop
      }
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.apply__J__O = (function(key) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = _$this;
    if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
      var x2 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
      var mask = x2.mask__J();
      var left = x2.left__Lscala_collection_immutable_LongMap();
      var right = x2.right__Lscala_collection_immutable_LongMap();
      if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().zero__J__J__Z(key, mask)) {
        _$this = left;
        continue tailCallLoop
      } else {
        _$this = right;
        continue tailCallLoop
      }
    };
    if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
      var x3 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
      var key2 = x3.key__J();
      var value = x3.value__O();
      if (key.equals__O__Z(key2)) {
        return value
      } else {
        return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Key not found")
      }
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
      return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("key not found")
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_LongMap = (function(kv) {
  return this.updated__J__O__Lscala_collection_immutable_LongMap(kv.$$und1$mcJ$sp__J(), kv.$$und2__O())
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.updated__J__O__Lscala_collection_immutable_LongMap = (function(key, value) {
  var x1 = this;
  if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
    var prefix = x2.prefix__J();
    var mask = x2.mask__J();
    var left = x2.left__Lscala_collection_immutable_LongMap();
    var right = x2.right__Lscala_collection_immutable_LongMap();
    if ((!ScalaJS.modules.scala_collection_immutable_LongMapUtils().hasMatch__J__J__J__Z(key, prefix, mask))) {
      return ScalaJS.modules.scala_collection_immutable_LongMapUtils().join__J__Lscala_collection_immutable_LongMap__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(key, new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, value), prefix, this)
    } else {
      if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().zero__J__J__Z(key, mask)) {
        return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix, mask, left.updated__J__O__Lscala_collection_immutable_LongMap(key, value), right)
      } else {
        return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix, mask, left, right.updated__J__O__Lscala_collection_immutable_LongMap(key, value))
      }
    }
  };
  if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
    var x3 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
    var key2 = x3.key__J();
    if (key.equals__O__Z(key2)) {
      return new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, value)
    } else {
      return ScalaJS.modules.scala_collection_immutable_LongMapUtils().join__J__Lscala_collection_immutable_LongMap__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(key, new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, value), key2, this)
    }
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
    return new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, value)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.updateWith__J__O__Lscala_Function2__Lscala_collection_immutable_LongMap = (function(key, value, f) {
  var x1 = this;
  if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
    var prefix = x2.prefix__J();
    var mask = x2.mask__J();
    var left = x2.left__Lscala_collection_immutable_LongMap();
    var right = x2.right__Lscala_collection_immutable_LongMap();
    if ((!ScalaJS.modules.scala_collection_immutable_LongMapUtils().hasMatch__J__J__J__Z(key, prefix, mask))) {
      return ScalaJS.modules.scala_collection_immutable_LongMapUtils().join__J__Lscala_collection_immutable_LongMap__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(key, new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, value), prefix, this)
    } else {
      if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().zero__J__J__Z(key, mask)) {
        return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix, mask, left.updateWith__J__O__Lscala_Function2__Lscala_collection_immutable_LongMap(key, value, f), right)
      } else {
        return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix, mask, left, right.updateWith__J__O__Lscala_Function2__Lscala_collection_immutable_LongMap(key, value, f))
      }
    }
  };
  if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
    var x3 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
    var key2 = x3.key__J();
    var value2 = x3.value__O();
    if (key.equals__O__Z(key2)) {
      return new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, f.apply__O__O__O(value2, value))
    } else {
      return ScalaJS.modules.scala_collection_immutable_LongMapUtils().join__J__Lscala_collection_immutable_LongMap__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(key, new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, value), key2, this)
    }
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
    return new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, value)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$minus__J__Lscala_collection_immutable_LongMap = (function(key) {
  var x1 = this;
  if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
    var prefix = x2.prefix__J();
    var mask = x2.mask__J();
    var left = x2.left__Lscala_collection_immutable_LongMap();
    var right = x2.right__Lscala_collection_immutable_LongMap();
    if ((!ScalaJS.modules.scala_collection_immutable_LongMapUtils().hasMatch__J__J__J__Z(key, prefix, mask))) {
      return this
    } else {
      if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().zero__J__J__Z(key, mask)) {
        return ScalaJS.modules.scala_collection_immutable_LongMapUtils().bin__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix, mask, left.$$minus__J__Lscala_collection_immutable_LongMap(key), right)
      } else {
        return ScalaJS.modules.scala_collection_immutable_LongMapUtils().bin__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix, mask, left, right.$$minus__J__Lscala_collection_immutable_LongMap(key))
      }
    }
  };
  if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
    var x4 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
    var key2 = x4.key__J();
    if (key.equals__O__Z(key2)) {
      return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
    } else {
      return this
    }
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
    return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.modifyOrRemove__Lscala_Function2__Lscala_collection_immutable_LongMap = (function(f) {
  var x1 = this;
  if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(x1);
    var prefix = x2.prefix__J();
    var mask = x2.mask__J();
    var left = x2.left__Lscala_collection_immutable_LongMap();
    var right = x2.right__Lscala_collection_immutable_LongMap();
    var newleft = left.modifyOrRemove__Lscala_Function2__Lscala_collection_immutable_LongMap(f);
    var newright = right.modifyOrRemove__Lscala_Function2__Lscala_collection_immutable_LongMap(f);
    if (((left === newleft) && (right === newright))) {
      return this
    } else {
      return ScalaJS.modules.scala_collection_immutable_LongMapUtils().bin__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix, mask, newleft, newright)
    }
  };
  if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(x1)) {
    var x3 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(x1);
    var key = x3.key__J();
    var value = x3.value__O();
    var x1$2 = ScalaJS.as.scala_Option(f.apply__O__O__O(ScalaJS.bJ(key), value));
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1$2)) {
      return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
    };
    if (ScalaJS.is.scala_Some(x1$2)) {
      var x2$2 = ScalaJS.as.scala_Some(x1$2);
      var value2 = x2$2.x__O();
      if ((value === value2)) {
        return this
      } else {
        return new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, value2)
      }
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), x1)) {
    return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.unionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap = (function(that, f) {
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(this, that);
  if ((x1 !== null)) {
    var p2 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und1__O());
    var that$2 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(p2)) {
      var x3 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(p2);
      var p1 = x3.prefix__J();
      var m1 = x3.mask__J();
      var l1 = x3.left__Lscala_collection_immutable_LongMap();
      var r1 = x3.right__Lscala_collection_immutable_LongMap();
      if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(that$2)) {
        var x4 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(that$2);
        var p2$2 = x4.prefix__J();
        var m2 = x4.mask__J();
        var l2 = x4.left__Lscala_collection_immutable_LongMap();
        var r2 = x4.right__Lscala_collection_immutable_LongMap();
        if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().shorter__J__J__Z(m1, m2)) {
          if ((!ScalaJS.modules.scala_collection_immutable_LongMapUtils().hasMatch__J__J__J__Z(p2$2, p1, m1))) {
            return ScalaJS.modules.scala_collection_immutable_LongMapUtils().join__J__Lscala_collection_immutable_LongMap__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p1, this, p2$2, x4)
          } else {
            if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().zero__J__J__Z(p2$2, m1)) {
              return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p1, m1, l1.unionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(x4, f), r1)
            } else {
              return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p1, m1, l1, r1.unionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(x4, f))
            }
          }
        } else {
          if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().shorter__J__J__Z(m2, m1)) {
            if ((!ScalaJS.modules.scala_collection_immutable_LongMapUtils().hasMatch__J__J__J__Z(p1, p2$2, m2))) {
              return ScalaJS.modules.scala_collection_immutable_LongMapUtils().join__J__Lscala_collection_immutable_LongMap__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p1, this, p2$2, x4)
            } else {
              if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().zero__J__J__Z(p1, m2)) {
                return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p2$2, m2, this.unionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(l2, f), r2)
              } else {
                return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p2$2, m2, l2, this.unionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(r2, f))
              }
            }
          } else {
            if (p1.equals__O__Z(p2$2)) {
              return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p1, m1, l1.unionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(l2, f), r1.unionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(r2, f))
            } else {
              return ScalaJS.modules.scala_collection_immutable_LongMapUtils().join__J__Lscala_collection_immutable_LongMap__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p1, this, p2$2, x4)
            }
          }
        }
      }
    }
  };
  if ((x1 !== null)) {
    var p5 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und1__O());
    var x = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(p5)) {
      var x6 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(p5);
      var key = x6.key__J();
      var value = x6.value__O();
      return x.updateWith__J__O__Lscala_Function2__Lscala_collection_immutable_LongMap(key, value, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(f$1, key$1) {
        return (function(x, y) {
          return f$1.apply__O__O__O__O(ScalaJS.bJ(key$1), y, x)
        })
      })(f, key)))
    }
  };
  if ((x1 !== null)) {
    var x$2 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und1__O());
    var p7 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(p7)) {
      var x8 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(p7);
      var key$2 = x8.key__J();
      var value$2 = x8.value__O();
      return x$2.updateWith__J__O__Lscala_Function2__Lscala_collection_immutable_LongMap(key$2, value$2, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(f$1, key$2) {
        return (function(x, y) {
          return f$1.apply__O__O__O__O(ScalaJS.bJ(key$2), x, y)
        })
      })(f, key$2)))
    }
  };
  if ((x1 !== null)) {
    var p9 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und1__O());
    var x$3 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), p9)) {
      return x$3
    }
  };
  if ((x1 !== null)) {
    var x$4 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und1__O());
    var p10 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_LongMap$Nil(), p10)) {
      return x$4
    }
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.intersectionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap = (function(that, f) {
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(this, that);
  if ((x1 !== null)) {
    var p2 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und1__O());
    var that$2 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(p2)) {
      var x3 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(p2);
      var p1 = x3.prefix__J();
      var m1 = x3.mask__J();
      var l1 = x3.left__Lscala_collection_immutable_LongMap();
      var r1 = x3.right__Lscala_collection_immutable_LongMap();
      if (ScalaJS.is.scala_collection_immutable_LongMap$Bin(that$2)) {
        var x4 = ScalaJS.as.scala_collection_immutable_LongMap$Bin(that$2);
        var p2$2 = x4.prefix__J();
        var m2 = x4.mask__J();
        var l2 = x4.left__Lscala_collection_immutable_LongMap();
        var r2 = x4.right__Lscala_collection_immutable_LongMap();
        if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().shorter__J__J__Z(m1, m2)) {
          if ((!ScalaJS.modules.scala_collection_immutable_LongMapUtils().hasMatch__J__J__J__Z(p2$2, p1, m1))) {
            return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
          } else {
            if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().zero__J__J__Z(p2$2, m1)) {
              return l1.intersectionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(x4, f)
            } else {
              return r1.intersectionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(x4, f)
            }
          }
        } else {
          if (m1.equals__O__Z(m2)) {
            return ScalaJS.modules.scala_collection_immutable_LongMapUtils().bin__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(p1, m1, l1.intersectionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(l2, f), r1.intersectionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(r2, f))
          } else {
            if ((!ScalaJS.modules.scala_collection_immutable_LongMapUtils().hasMatch__J__J__J__Z(p1, p2$2, m2))) {
              return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
            } else {
              if (ScalaJS.modules.scala_collection_immutable_LongMapUtils().zero__J__J__Z(p1, m2)) {
                return this.intersectionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(l2, f)
              } else {
                return this.intersectionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(r2, f)
              }
            }
          }
        }
      }
    }
  };
  if ((x1 !== null)) {
    var p5 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und1__O());
    var that$3 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(p5)) {
      var x6 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(p5);
      var key = x6.key__J();
      var value = x6.value__O();
      var x1$2 = that$3.get__J__Lscala_Option(key);
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1$2)) {
        return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
      };
      if (ScalaJS.is.scala_Some(x1$2)) {
        var x2 = ScalaJS.as.scala_Some(x1$2);
        var value2 = x2.x__O();
        return new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, f.apply__O__O__O__O(ScalaJS.bJ(key), value, value2))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
    }
  };
  if ((x1 !== null)) {
    var p8 = ScalaJS.as.scala_collection_immutable_LongMap(x1.$$und2__O());
    if (ScalaJS.is.scala_collection_immutable_LongMap$Tip(p8)) {
      var x9 = ScalaJS.as.scala_collection_immutable_LongMap$Tip(p8);
      var key$2 = x9.key__J();
      var value$2 = x9.value__O();
      var x1$3 = this.get__J__Lscala_Option(key$2);
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1$3)) {
        return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
      };
      if (ScalaJS.is.scala_Some(x1$3)) {
        var x2$2 = ScalaJS.as.scala_Some(x1$3);
        var value2$2 = x2$2.x__O();
        return new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key$2, f.apply__O__O__O__O(ScalaJS.bJ(key$2), value2$2, value$2))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1$3)
    }
  };
  if ((x1 !== null)) {
    return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.intersection__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap = (function(that) {
  return this.intersectionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(that, new ScalaJS.c.scala_scalajs_runtime_AnonFunction3().init___Lscala_scalajs_js_Function3((function() {
    return (function(key, value, value2) {
      key = ScalaJS.uJ(key);
      return value
    })
  })()))
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$plus$plus__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap = (function(that) {
  return this.unionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(that, new ScalaJS.c.scala_scalajs_runtime_AnonFunction3().init___Lscala_scalajs_js_Function3((function() {
    return (function(key, x, y) {
      key = ScalaJS.uJ(key);
      return y
    })
  })()))
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.keySet__Lscala_collection_Set = (function() {
  return this.keySet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.mapValues__Lscala_Function1__Lscala_collection_Map = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_Map(p)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_Map = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_Map(p)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_Map(xs)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_Map(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__J__Lscala_collection_immutable_LongMap(ScalaJS.uJ(key))
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__J__Lscala_collection_immutable_LongMap(ScalaJS.uJ(elem))
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__J__Lscala_collection_immutable_LongMap(ScalaJS.uJ(key))
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__J__O__Lscala_collection_immutable_LongMap(ScalaJS.uJ(key), value)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__J__O__Lscala_collection_immutable_LongMap(ScalaJS.uJ(key), value)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.updated__O__O__Lscala_collection_immutable_Map = (function(key, value) {
  return this.updated__J__O__Lscala_collection_immutable_LongMap(ScalaJS.uJ(key), value)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_LongMap(kv)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_LongMap(kv)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_LongMap(kv)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.apply__O__O = (function(key) {
  return this.apply__J__O(ScalaJS.uJ(key))
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.getOrElse__O__Lscala_Function0__O = (function(key, default$2) {
  return this.getOrElse__J__Lscala_Function0__O(ScalaJS.uJ(key), default$2)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.get__O__Lscala_Option = (function(key) {
  return this.get__J__Lscala_Option(ScalaJS.uJ(key))
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.filter__Lscala_Function1__O = (function(p) {
  return this.filter__Lscala_Function1__Lscala_collection_immutable_LongMap(p)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_immutable_LongMap()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.empty__Lscala_collection_immutable_Map = (function() {
  return this.empty__Lscala_collection_immutable_LongMap()
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$plus$plus__Lscala_collection_immutable_LongMap__ = (function(that) {
  return this.$$plus$plus__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(that)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.intersection__Lscala_collection_immutable_LongMap__ = (function(that$2) {
  return this.intersection__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(that$2)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.intersectionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__ = (function(that$3, f) {
  return this.intersectionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(that$3, f)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.unionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__ = (function(that$4, f$2) {
  return this.unionWith__Lscala_collection_immutable_LongMap__Lscala_Function3__Lscala_collection_immutable_LongMap(that$4, f$2)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.modifyOrRemove__Lscala_Function2__ = (function(f$3) {
  return this.modifyOrRemove__Lscala_Function2__Lscala_collection_immutable_LongMap(f$3)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$$minus__J__ = (function(key) {
  return this.$$minus__J__Lscala_collection_immutable_LongMap(key)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.updateWith__J__O__Lscala_Function2__ = (function(key$2, value, f$4) {
  return this.updateWith__J__O__Lscala_Function2__Lscala_collection_immutable_LongMap(key$2, value, f$4)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.updated__J__O__ = (function(key$3, value$2) {
  return this.updated__J__O__Lscala_collection_immutable_LongMap(key$3, value$2)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.apply__J__ = (function(key$4) {
  return this.apply__J__O(key$4)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.getOrElse__J__Lscala_Function0__ = (function(key$5, default$2) {
  return this.getOrElse__J__Lscala_Function0__O(key$5, default$2)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.get__J__ = (function(key$6) {
  return this.get__J__Lscala_Option(key$6)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.transform__Lscala_Function2__ = (function(f$5) {
  return this.transform__Lscala_Function2__Lscala_collection_immutable_LongMap(f$5)
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.foreachValue__Lscala_Function1__ = (function(f$6) {
  return ScalaJS.bV(this.foreachValue__Lscala_Function1__V(f$6))
});
ScalaJS.c.scala_collection_immutable_LongMap.prototype.foreachKey__Lscala_Function1__ = (function(f$7) {
  return ScalaJS.bV(this.foreachKey__Lscala_Function1__V(f$7))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMap.prototype = ScalaJS.c.scala_collection_immutable_LongMap.prototype;
ScalaJS.is.scala_collection_immutable_LongMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMap)))
});
ScalaJS.as.scala_collection_immutable_LongMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMap)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMap = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMap: 0
}, false, "scala.collection.immutable.LongMap", ScalaJS.data.scala_collection_immutable_AbstractMap, {
  scala_collection_immutable_LongMap: 1,
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
ScalaJS.c.scala_collection_immutable_LongMap.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMap;
//@ sourceMappingURL=LongMap.js.map
